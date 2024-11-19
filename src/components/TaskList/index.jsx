import React from "react";
import Task from "../Task";
import { TaskListContainer, NoTasksMessage } from "./styled.js";

function TaskList({ tasks, updateTask, deleteTask, toggleTaskCompletion }) {
  return (
    <TaskListContainer>
      {tasks.length === 0 ? (
        <NoTasksMessage>No tasks available</NoTasksMessage>
      ) : (
        tasks.map((task) => (
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
