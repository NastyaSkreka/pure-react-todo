import React from "react";
import { StyledButton } from "./styled.js";

const Button = ({ text, onClick, variant = 'default'}) => {
  return <StyledButton variant={variant} onClick={onClick}>{text}</StyledButton>;
};

export default Button;
