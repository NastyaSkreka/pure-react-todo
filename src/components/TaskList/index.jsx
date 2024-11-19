import React from "react";
import Task from "../Task";
import { TaskListContainer, NoTasksMessage } from "./styled.js";

function TaskList({ tasks, updateTask, deleteTask, toggleTaskCompletion }) {
  return (
    <TaskListContainer>
           {/* Перевірка, чи є завдання в списку */}
      {tasks.length === 0 ? (
          // Якщо завдань немає, виводимо повідомлення
        <NoTasksMessage>No tasks available</NoTasksMessage>
      ) : (
         // Якщо є завдання, відображаємо їх у вигляді списку
        tasks.map((task) => (
            // Для кожного завдання генеруємо компонент Task
          <Task
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))
      )}
    </TaskListContainer>
  );
}

export default TaskList;
