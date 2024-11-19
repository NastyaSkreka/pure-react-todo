import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {Container, Title, ButtonsWrapper, BodyWrapper} from './App.styled.js'
import Button from "./components/ui/Button";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (text) => {
    setTasks([...tasks, {id: uuidv4(), text, isCompleted: false}])
  }
  
  const updateTask = (id, newText) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.isCompleted;
    if (filter === 'incomplete') return !task.isCompleted;
    return true;
  })

  return (
     <Container>
        <Title>To-Do App</Title>
        <ButtonsWrapper>
         <Button onClick={() => setFilter('all')} text="All"/>
         <Button onClick={() => setFilter('completed')} text="Completed"/>
         <Button onClick={() => setFilter('incomplete')}  text="Incomplete"/>
        </ButtonsWrapper>
        <BodyWrapper>
        <TaskList tasks={filteredTasks}
           updateTask={updateTask}
           deleteTask={deleteTask}
           toggleTaskCompletion={toggleTaskCompletion}
        />
        <TaskForm addTask={addTask}/>
        </BodyWrapper>
     </Container>
  );
}

export default App;
