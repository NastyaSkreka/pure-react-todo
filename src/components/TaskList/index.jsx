import React from 'react';
import Task from '../Task';
import {TaskListContainer} from './styled.js'

function TaskList({tasks, updateTask, deleteTask, toggleTaskCompletion }) {
    return (
       <TaskListContainer>
          {tasks.map(task => (
             <Task
                key={task.id}
                task={task}
                updateTask={updateTask}
                deleteTask={deleteTask}
                toggleTaskCompletion={toggleTaskCompletion}
             />
          ))}
       </TaskListContainer>
    );
  }
  
export default TaskList;