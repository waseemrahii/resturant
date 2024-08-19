// src/AddressForm.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Checkbox,
} from '@mui/material';

const AddressForm = ({ open, onSaveAddress, addressToEdit, onClose }) => {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [isDefault, setIsDefault] = useState(false);

  useEffect(() => {
    if (addressToEdit) {
      setLocation(addressToEdit.location);
      setType(addressToEdit.type);
      setIsDefault(addressToEdit.isDefault);
    } else {
      setLocation('');
      setType('');
      setIsDefault(false);
    }
  }, [addressToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAddress = {
      id: addressToEdit ? addressToEdit.id : Date.now(),
      location,
      type,
      isDefault,
    };
    onSaveAddress(newAddress);
    setLocation('');
    setType('');
    setIsDefault(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delivery Address</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            margin="normal"
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <FormControl component="fieldset" margin="normal" className='flex flex-col'>
            <FormLabel component="legend">Type</FormLabel>
            <RadioGroup
              row
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <FormControlLabel value="Home" control={<Radio />} label="Home" />
              <FormControlLabel value="Work" control={<Radio />} label="Work" />
              <FormControlLabel value="Hotel" control={<Radio />} label="Hotel" />
              <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                checked={isDefault}
                onChange={(e) => setIsDefault(e.target.checked)}
              />
            }
            label="Default"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Close
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddressForm.propTypes = {
  open: PropTypes.bool.isRequired,
  onSaveAddress: PropTypes.func.isRequired,
  addressToEdit: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default AddressForm;
