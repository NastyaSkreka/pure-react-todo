import { StyledInput } from "./styled.js";

const Input = ({ type = "text",onBlur,  placeholder, value, onChange, name }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      onBlur={onBlur}
    />
  );
};

export default Input;
