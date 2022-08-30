import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  label,
  validation,
  handleChange,
  value,
  placeholder,
  className,
  validationTestID
}) => {
  return (
    <React.Fragment>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        name={label}
        id={label}
        aria-label={label}
        aria-required="true"
        className={className}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      {validation && (
        <span id={validationTestID} tabIndex={0}>
          {validation}
        </span>
      )}
    </React.Fragment>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  validation: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  validationTestID: PropTypes.string.isRequired
};

export default InputField;
