import React, { useState, useRef, useEffect} from "react";
import Input from "../ui/Input";
import { StyledForm } from "./styled.js";
import Button from "../ui/Button";

function TaskForm({ addTask }) {
  const [text, setText] = useState("");
   // Створюємо реф для доступу до інпуту
  const inputRef = useRef(null);

  // Використовуємо useEffect для фокусування на полі вводу після завантаження компонента
  useEffect(() => {
    if (inputRef.current) { 
      inputRef.current.focus(); // Коли компонент завантажується, фокусується на input
    }
  }, []); // Порожній масив означає, що ефект виконається лише один раз при монтуванні компонента
  
  // Обробник події при відправці форми
  const handleSubmit = (e) => {
    e.preventDefault(); // Запобігаємо стандартному оновленню сторінки при відправці форми
    if (text.trim()) {  // Перевірка на наявність тексту в полі вводу (без пробілів на початку та в кінці)
      addTask(text.trim()); // Додаємо нове завдання через функцію addTask
      setText("");  // Очищаємо поле вводу після додавання завдання
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        ref={inputRef}  // Передаємо реф для доступу до елемента
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}  // Оновлюємо стан при зміні тексту
        placeholder="Add new task"
      />
      {/* Кнопка для додавання завдання */}
      <Button text="Add" type="submit" />
    </StyledForm>
  );
}

export default TaskForm;
