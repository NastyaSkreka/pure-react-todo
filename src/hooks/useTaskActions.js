import { v4 as uuidv4 } from "uuid";

const useTaskActions = (tasks, setTasks, filter) => {
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
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return { addTask, updateTask, deleteTask, toggleTaskCompletion };
};

export default useTaskActions;
