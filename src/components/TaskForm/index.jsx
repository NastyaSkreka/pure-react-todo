import React, { useState, useRef, useEffect} from "react";
import Input from "../ui/Input";
import { StyledForm } from "./styled.js";
import Button from "../ui/Button";

function TaskForm({ addTask }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text.trim());
      setText("");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        ref={inputRef} 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task"
      />
      <Button text="Add" type="submit" />
    </StyledForm>
  );
}

export default TaskForm;
