import React from "react";
import { StyledButton } from "./styled.js";

const FilterButton = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default FilterButton;
