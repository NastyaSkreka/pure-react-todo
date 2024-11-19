import { useState } from "react";

// Хук для керування фільтрацією задач за їхнім статусом 
const useFilter = (initialFilter) => {
     // 1. Використовуємо хук useState для збереження поточного фільтра
    const [filter, setFilter] = useState(initialFilter);
  
      // 2. Функція для фільтрації задач на основі поточного фільтра
    const filteredTasks = (tasks) => {
         // 3. Якщо фільтр "completed", то повертаємо тільки виконані задачі
      if (filter === "completed") return tasks.filter((task) => task.isCompleted);
         // 4. Якщо фільтр "incomplete", то повертаємо тільки невиконані задачі
      if (filter === "incomplete") return tasks.filter((task) => !task.isCompleted);
         // 5. Якщо фільтр інший (наприклад, "all"), повертаємо всі задачі без змін
      return tasks;
    };
  
    return { filter, setFilter, filteredTasks };
  };
  
  export default useFilter;
  