import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {Container, Title, ButtonsWrapper, BodyWrapper} from './App.styled.js'
import Button from "./components/ui/Button";

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (text) => {
    setTasks([...tasks, {id: Date.now().toString, text, isCompleted: false}])
  }


  return (
     <Container>
        <Title>To-Do App</Title>
        <ButtonsWrapper>
         <Button text="All"/>
         <Button text="Completed"/>
         <Button text="Incomplete"/>
        </ButtonsWrapper>
        <BodyWrapper>
        <TaskList/>
        <TaskForm addTask={addTask}/>
        </BodyWrapper>
     </Container>
  );
}

export default App;
