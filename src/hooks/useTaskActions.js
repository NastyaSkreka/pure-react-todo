import { v4 as uuidv4 } from "uuid";

// Хук  керує діями з задачами: додавання, оновлення, видалення та зміна статусу виконання.
const useTaskActions = (tasks, setTasks, filter) => {

     // 1. Функція для додавання нової задачі
  const addTask = (text) => {
     // 2. Функція для визначення статусу виконання задачі, залежно від поточного фільтра
    const getCompletionStatus = () => {
      switch (filter) {
        case "completed": // Якщо фільтр "completed", задача буде відразу позначена як виконана
          return true;
        case "incomplete": // Якщо фільтр "incomplete", задача буде позначена як не виконана
          return false;
        default:
          return false;
      }
    };

    // 3. Створення нової задачі
    const newTask = {
      id: uuidv4(), // Генерація унікального ідентифікатора для задачі
      text, // Текст задачі, переданий як аргумент
      isCompleted: getCompletionStatus(), // Статус виконання задачі, який визначається функцією `getCompletionStatus`
    };

      // 4. Оновлення списку задач, додаючи нову задачу
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };


    // 5. Функція для оновлення тексту існуючої задачі
  const updateTask = (id, newText) => {
    setTasks(
        // Якщо знайдено задачу з відповідним id, оновлюємо її текст
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

    // 6. Функція для видалення задачі за її id
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // Фільтруємо список, виключаючи задачу з відповідним id
  };

    // 7. Функція для зміни статусу виконання задачі
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task  // Перемикаємо статус виконання задачі
      )
    );
  };


   // 8. Повертаємо об'єкт з функціями для виконання операцій з задачами
  return { addTask, updateTask, deleteTask, toggleTaskCompletion };
};

export default useTaskActions;
