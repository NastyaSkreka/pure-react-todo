import React from "react";
import { StyledButton } from "./styled.js";

const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
