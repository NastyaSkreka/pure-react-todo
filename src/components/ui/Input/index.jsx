import React from "react";
import { StyledInput } from "./styled.js";

const Input = React.forwardRef(({
    type = "text",   // Пропс для типу введення (за замовчуванням текстовий)
    onBlur,    // Пропс для обробки події втрати фокусу
    placeholder,   // Пропс для тексту-підказки в полі введення
    value,  // Пропс для значення в полі введення
    onChange,  // Пропс для обробки зміни значення поля
    name,     // Пропс для імені поля введення
  }, ref) => {   // Використовуємо ref для доступу до DOM елементу через React.forwardRef
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