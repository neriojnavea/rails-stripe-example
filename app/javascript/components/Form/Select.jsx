import React from 'react';

const Select = ({ label, options }) => (
  <div className="form-group">
    <label for="exampleFormControlSelect1">{label}</label>
    <select className="form-control" id="exampleFormControlSelect1">
      {options.map(option => <option value={option.value}>{option.label}</option>)}
    </select>
  </div>
)

export default Select;
