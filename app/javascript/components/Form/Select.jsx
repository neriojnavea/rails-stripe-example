import React from 'react';
import ReactSelect from 'react-select';

const Select = ({ label, options, id, value, placeholder, onChange }) => {
  const handleChange = (selectedOption) => onChange(id, selectedOption)
  return (
    <div className="form-group">
      <label for="exampleFormControlSelect1">{label}</label>
      <ReactSelect
        options={options}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Select;
