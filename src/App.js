import React, {
    useEffect,
    useState
} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {
    Container,
    Title,
    ButtonsWrapper,
    BodyWrapper
} from "./App.styled.js";
import Button from "./components/ui/Button";
import {
    v4 as uuidv4
} from "uuid";

function App() {
    const [filter, setFilter] = useState("all");

    const loadTasks = () => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    };

    const saveTasksToLocalStorage = (tasks) => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    const [tasks, setTasks] = useState(loadTasks);

    useEffect(() => {
        saveTasksToLocalStorage(tasks);
    }, [tasks]);


    const addTask = (text) => {
        const getCompletionStatus = () => {
            switch (filter) {
                case "completed":
                    return true;
                case "incomplete":
                    return false;
                default:
                    return false;
            }
        };

        const newTask = {
            id: uuidv4(),
            text,
            isCompleted: getCompletionStatus(),
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
    };


    const updateTask = (id, newText) => {
        setTasks(
            tasks.map((task) => (task.id === id ? {
                ...task,
                text: newText
            } : task))
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleTaskCompletion = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? {
                    ...task,
                    isCompleted: !task.isCompleted
                } : task
            )
        );
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.isCompleted;
        if (filter === "incomplete") return !task.isCompleted;
        return true;
    });

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
            tasks={filteredTasks} 
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