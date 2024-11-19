import { useState } from "react";

const useFilter = (initialFilter) => {
    const [filter, setFilter] = useState(initialFilter);
  
    const filteredTasks = (tasks) => {
      if (filter === "completed") return tasks.filter((task) => task.isCompleted);
      if (filter === "incomplete") return tasks.filter((task) => !task.isCompleted);
      return tasks;
    };
  
    return { filter, setFilter, filteredTasks };
  };
  
  export default useFilter;
  