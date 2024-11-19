import { useState, useEffect } from "react";
// Хук для збереження задач в localStorage та їх завантаження при ініціалізації
const useTaskStorage = () => {
     // 1. Функція для завантаження задач з localStorage
  const loadTasks = () => {
     // Отримуємо задачі з localStorage (якщо вони є)
    const storedTasks = localStorage.getItem("tasks");
         // Якщо задачі знайдені, парсимо їх і повертаємо, інакше повертаємо порожній масив
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

   // 2. Функція для збереження задач у localStorage
  const saveTasksToLocalStorage = (tasks) => {
      // Перетворюємо масив задач у JSON формат та зберігаємо його в localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };


  // 3. Використовуємо хук useState для збереження задач у локальному стані
  // Ініціалізуємо стан з функцією loadTasks (щоб при запуску додатку задачі завантажувались з localStorage)
  const [tasks, setTasks] = useState(loadTasks());

    // 4. Використовуємо хук useEffect для того, щоб зберігати задачі в localStorage щоразу, коли tasks змінюються
  useEffect(() => {
     // Зберігаємо задачі в localStorage після кожної зміни
    saveTasksToLocalStorage(tasks);
  }, [tasks]); // Цей effect буде спрацьовувати при кожній зміні tasks
// 5. Повертаємо масив задач та функцію для їх оновлення
  return [tasks, setTasks];
};

export default useTaskStorage;
