import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {Container, Title, ButtonsWrapper, BodyWrapper} from './App.styled.js'
import Button from "./components/ui/Button";

function App() {
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
        <TaskForm/>
        </BodyWrapper>
     </Container>
  );
}

export default App;
