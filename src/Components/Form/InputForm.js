import React from 'react';

import { Input } from '../Styles';

function InputForm({ placeholder, type, name, value, className, id }) {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      id={id}
      className={className}
      autoComplete="off"
    />
  );
}

export default InputForm;
