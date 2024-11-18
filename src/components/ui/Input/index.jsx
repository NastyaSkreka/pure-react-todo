import { StyledInput } from "./styled.js";

const Input = ({ type = "text", placeholder, value, onChange, name }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default Input;