import { useState, useEffect } from "react";

const useTaskStorage = () => {
  const loadTasks = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const [tasks, setTasks] = useState(loadTasks());

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  return [tasks, setTasks];
};

export default useTaskStorage;
