import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { TaskContainer, TaskText, ActionsContainer } from "./styled.js";

function Task({ task, updateTask, toggleTaskCompletion, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newText.trim() !== task.text) {
      updateTask(task.id, newText);
    }
    setIsEditing(false);
  };

  const handleCheckboxChange = () => {
    toggleTaskCompletion(task.id);
  };

  return (
    <TaskContainer>
      {isEditing ? (
        <Input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleSave}
        />
      ) : (
        <TaskText isCompleted={task.isCompleted}>{task.text}</TaskText>
      )}
      {!task.isCompleted && (
        <Button
          onClick={isEditing ? handleSave : handleEdit}
          variant="edit"
          text={isEditing ? "Save" : "Edit"}
        />
      )}
      <ActionsContainer>
        <Button
          onClick={() => deleteTask(task.id)}
          variant="delete"
          text="Delete"
        />
         <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={handleCheckboxChange}
            style={{
                visibility: isEditing ? "hidden" : "visible", 
              }}
          />
      </ActionsContainer>
    </TaskContainer>
  );
}

export default Task;
