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
    // 1. Ініціалізація стану за допомогою кастомних хуків:
    // - `tasks`: містить список задач, ініціалізується за допомогою хука `useTaskStorage`.
    const [tasks, setTasks] = useTaskStorage();
    
     // - `filter`: керує поточним станом фільтра (може бути "all", "completed", або "incomplete").
    // - `setFilter`: функція для оновлення стану фільтра.
    // - `filteredTasks`: функція, що застосовує поточний фільтр до списку задач.
    const { filter, setFilter, filteredTasks } = useTaskFilter("all"); 

    // 2. Дії над задачами:
    // - `addTask`: додає нову задачу до списку.
    // - `updateTask`: оновлює існуючу задачу.
    // - `deleteTask`: видаляє задачу.
    // - `toggleTaskCompletion`: перемикає статус виконання задачі.
    const { addTask, updateTask, deleteTask, toggleTaskCompletion } = useTaskActions(tasks, setTasks, filter); 
  
     // 3. Отримання відфільтрованого списку задач:
    // - Викликається функція `filteredTasks` з передачею всього списку задач для отримання лише тих, що відповідають поточному фільтру ("all", "completed", "incomplete").
    const filteredTasksList = filteredTasks(tasks); 

    return ( <Container>
           {/* 4. Заголовок програми */}
        <Title>To-Do App</Title>
            {/* 5. Кнопки для фільтрації задач */}
        <ButtonsWrapper>
             {/* Кнопка фільтрації за всіма задачами */}
          <Button 
            onClick={() => setFilter("all")} 
            text="All" 
            isActive={filter === "all"}   // Активна, якщо фільтр встановлений на "all"
          />
            {/* Кнопка фільтрації за виконаними задачами */}
          <Button 
            onClick={() => setFilter("completed")} 
            text="Completed" 
            isActive={filter === "completed"}  // Активна, якщо фільтр встановлений на "completed"
          />
         {/* Кнопка фільтрації за невиконаними задачами */}
          <Button 
            onClick={() => setFilter("incomplete")} 
            text="Incomplete" 
            isActive={filter === "incomplete"}   // Активна, якщо фільтр встановлений на "incomplete"
          />
        </ButtonsWrapper>
          {/* 6. Основна частина для відображення задач і форми додавання нових */}
        <BodyWrapper>
          <TaskList 
            tasks={filteredTasksList}  // Передаємо відфільтрований список задач
            updateTask={updateTask} // Передаємо функцію для оновлення задачі
            deleteTask={deleteTask} // Передаємо функцію для видалення задачі
            toggleTaskCompletion={toggleTaskCompletion} // Передаємо функцію для зміни статусу виконання задачі
          />
          <TaskForm addTask={addTask} />
        </BodyWrapper>
      </Container>
      
    );
}

export default App;