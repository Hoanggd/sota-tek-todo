import { LocalStorageKey } from "../constants/localStorage";

const taskKey = LocalStorageKey.Task;

const getData = (key) => JSON.parse(localStorage.getItem(key) || []);
const setData = (key, data) => localStorage.setItem(key, JSON.stringify(data));

// CRUD
const getTasks = () => {};

const createTask = (task) => {
  const tasks = getData(taskKey);
  const newTasks = [...tasks, task];
  setData(newTasks);
};

const updateTask = (newTask) => {
  const tasks = getData(taskKey);
  const newTasks = tasks.map((task) => {
    if (task.id === newTask.id) {
      return newTask;
    }
    return task;
  });
  setData(newTasks);
};

const removeTask = (id) => {
  const tasks = getData(taskKey);
  const newTasks = tasks.filter((task) => task.id !== id);
  setData(newTasks);
};

export { getTasks, createTask, updateTask, removeTask };
