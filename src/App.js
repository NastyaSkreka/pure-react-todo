import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {Container, Title, ButtonsWrapper, BodyWrapper} from './App.styled.js'
import FilterButton from "./components/ui/FilterButton";

function App() {
  return (
     <Container>
        <Title>To-Do App</Title>
        <ButtonsWrapper>
         <FilterButton text="All"/>
         <FilterButton text="Completed"/>
         <FilterButton text="Incomplete"/>
        </ButtonsWrapper>
        <BodyWrapper>
        <TaskList/>
        <TaskForm/>
        </BodyWrapper>
     </Container>
  );
}

export default App;
