import React from "react";
import { StyledInput } from "./styled.js";

const Input = React.forwardRef(({
    type = "text",
    onBlur,
    placeholder,
    value,
    onChange,
    name,
  }, ref) => {
    return (
      <StyledInput
        ref={ref} 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
      />
    );
  });
  
  export default Input;