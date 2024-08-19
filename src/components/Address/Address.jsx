// src/App.js
import { useState } from 'react';
import AddressForm from './AddressForm';
import AddressCard from './AddressCard';

const Address = () => {
  const initialAddresses = [
    {
      id: 1,
      location: 'Soan heights2, street 25, Block B,Islamabad, Islamabad Capital Territory, Pakistan',
      type: 'Home',
      isDefault: false,
    },
    {
      id: 2,
      location: 'Soan Garden, soan heights 2, Street 25, Block B,Islamabad, Islamabad Capital Territory, Pakistan',
      type: 'Work',
      isDefault: true,
    },
    {
      id: 3,
      location: 'i8,Islamabad, Islamabad Capital Territory, Pakistan',
      type: 'Hotel',
      isDefault: false,
    },
  ];

  const [addresses, setAddresses] = useState(initialAddresses);
  const [showForm, setShowForm] = useState(false);
  const [defaultAddressId, setDefaultAddressId] = useState(null);

  const handleDefaultChange = (id) => {
    setDefaultAddressId(id);
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  const handleAddAddress = (newAddress) => {
    setAddresses([...addresses, newAddress]);
    setShowForm(false);
  };
  // const [addresses, setAddresses] = useState(initialAddresses);
  // const [showForm, setShowForm] = useState(false);
  const [addressToEdit, setAddressToEdit] = useState(null);

  // const handleDeleteAddress = (id) => {
  //   setAddresses(addresses.filter((address) => address.id !== id));
  // };

  const handleSaveAddress = (newAddress) => {
    if (addressToEdit) {
      setAddresses(addresses.map((address) => (address.id === newAddress.id ? newAddress : address)));
    } else {
      setAddresses([...addresses, newAddress]);
    }
    setShowForm(false);
    setAddressToEdit(null);
  };

  // const handleEditAddress = (address) => {
  //   setAddressToEdit(address);
  //   setShowForm(true);
  // };

  return (
    <div className="p-4  min-h-screen">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-lg mb-4"
        onClick={() => {
          setAddressToEdit(null);
          setShowForm(true);
        }}
      >
        + Add New
      </button>
      {showForm && (
        <AddressForm
          open={showForm}
          onSaveAddress={handleSaveAddress}
          addressToEdit={addressToEdit}
          onClose={() => setShowForm(false)}
        />
      )}
      {showForm && <AddressForm onAddAddress={handleAddAddress} />}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            isDefault={address.id === defaultAddressId}
          onDefaultChange={() => handleDefaultChange(address.id)}
            onDelete={() => handleDeleteAddress(address.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Address;
