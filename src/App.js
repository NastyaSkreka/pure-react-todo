import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {
    Container,
    Title,
    ButtonsWrapper,
    BodyWrapper
} from "./App.styled.js";
import Button from "./components/ui/Button";
import useTaskStorage from "./hooks/useTaskStorage";
import useTaskFilter from "./hooks/useTaskFilter";
import useTaskActions from "./hooks/useTaskActions";

function App() {
    const [tasks, setTasks] = useTaskStorage(); 
    const { filter, setFilter, filteredTasks } = useTaskFilter("all"); 
    const { addTask, updateTask, deleteTask, toggleTaskCompletion } = useTaskActions(tasks, setTasks, filter); 
  
    const filteredTasksList = filteredTasks(tasks); 

    return ( <Container>
        <Title>To-Do App</Title>
        <ButtonsWrapper>
          <Button 
            onClick={() => setFilter("all")} 
            text="All" 
            isActive={filter === "all"} 
          />
          <Button 
            onClick={() => setFilter("completed")} 
            text="Completed" 
            isActive={filter === "completed"} 
          />
          <Button 
            onClick={() => setFilter("incomplete")} 
            text="Incomplete" 
            isActive={filter === "incomplete"} 
          />
        </ButtonsWrapper>
        <BodyWrapper>
          <TaskList 
            tasks={filteredTasksList} 
            updateTask={updateTask} 
            deleteTask={deleteTask} 
            toggleTaskCompletion={toggleTaskCompletion} 
          />
          <TaskForm addTask={addTask} />
        </BodyWrapper>
      </Container>
      
    );
}

export default App;