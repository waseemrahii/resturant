import React from 'react';
import PropTypes from 'prop-types';

const ProgressStep = ({ Icon, accomplished }) => (
  <div className={`step ${accomplished ? "completed" : ""}`}>
    <Icon size={30} color={accomplished ? "#EF4444" : "#ccc"} />
  </div>
);

ProgressStep.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  accomplished: PropTypes.bool.isRequired,
};

export default ProgressStep;
