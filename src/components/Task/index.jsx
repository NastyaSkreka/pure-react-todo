import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { TaskContainer, TaskText, ActionsContainer } from "./styled.js";

function Task({ task, updateTask, toggleTaskCompletion, deleteTask }) {
      // Створюємо стан для редагування тексту завдання та нового тексту
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

    // Обробник натискання кнопки "Edit"
  const handleEdit = () => {
    setIsEditing(true);
  };

    // Обробник натискання кнопки "Save"
  const handleSave = () => {
      // Якщо новий текст відрізняється від старого, оновлюємо завдання
    if (newText.trim() !== task.text) {
      updateTask(task.id, newText);
    }
    setIsEditing(false);
  };

    // Обробник зміни стану чекбоксу (позначити завдання як виконане/невиконане)
  const handleCheckboxChange = () => {
    toggleTaskCompletion(task.id);
  };

  return (
    <TaskContainer>
            {/* Перевірка, чи завдання в режимі редагування */}
      {isEditing ? (
           // Якщо в режимі редагування, відображаємо поле вводу для зміни тексту
        <Input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleSave} // Зберігаємо текст при втраті фокусу
        />
      ) : (
          // Якщо не в режимі редагування, відображаємо стандартний текст завдання
        <TaskText isCompleted={task.isCompleted}>{task.text}</TaskText>
      )}
       {/* Якщо завдання ще не виконано, дозволяємо редагувати або зберігати */}
      {!task.isCompleted && (
        <Button
          onClick={isEditing ? handleSave : handleEdit}
          variant="edit"
          text={isEditing ? "Save" : "Edit"}
        />
      )}
       {/* Кнопка для видалення завдання */}
      <ActionsContainer>
        <Button
          onClick={() => deleteTask(task.id)}
          variant="delete"
          text="Delete"
        />
           {/* Чекбокс для зміни стану виконаності завдання */}
         <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={handleCheckboxChange}
            style={{
                visibility: isEditing ? "hidden" : "visible",  // Чекбокс приховується, коли завдання редагується
              }}
          />
      </ActionsContainer>
    </TaskContainer>
  );
}

export default Task;
