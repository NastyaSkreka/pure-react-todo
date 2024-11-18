import React from "react";
import Input from "../ui/Input";
import { StyledForm } from "./styled.js";
import Button from "../ui/Button";

function TaskForm() {
  return (
    <StyledForm>
      <Input
        placeholder="Add new task"
      />
      <Button text="Add" type="submit"/>
    </StyledForm>
  );
}

export default TaskForm;
