import React from "react";
import { StyledButton } from "./styled.js";

const Button = ({ text, onClick, variant = "default", isActive = false }) => {
  return (
    // Повертаємо кнопку зі стилями, які залежать від пропсів variant та isActive
    <StyledButton variant={variant} isActive={isActive} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
