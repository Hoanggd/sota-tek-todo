import { useMutation, useQuery, useQueryClient } from "react-query";
import { LocalStorageKey } from "../constants/localStorage";
import { v4 as uuidv4 } from "uuid";

const taskKey = LocalStorageKey.Task;

const getData = (key) => JSON.parse(localStorage.getItem(key) || null) || [];
const setData = (key, data) => localStorage.setItem(key, JSON.stringify(data));

// CRUD
const getTasks = (search) => {
  const tasks = getData(taskKey);
  const sortedTasks = tasks.sort((a, b) => {
    const timeA = new Date(a.dueDate).getTime();
    const timeB = new Date(b.dueDate).getTime();
    return timeA - timeB;
  });
  const filteredTasks = sortedTasks.filter((item) => {
    const keyword = search.toLowerCase();
    const title = item.title.toLowerCase();
    return title.includes(keyword);
  });
  return filteredTasks;
};

const createTask = (task) => {
  const tasks = getData(taskKey);
  const newTasks = [
    ...tasks,
    {
      ...task,
      id: uuidv4(),
    },
  ];
  setData(taskKey, newTasks);
};

const updateTask = (newTask) => {
  const tasks = getData(taskKey);
  const newTasks = tasks.map((task) => {
    if (task.id === newTask.id) {
      return newTask;
    }
    return task;
  });
  setData(taskKey, newTasks);
};

const removeTask = (id) => {
  const tasks = getData(taskKey);
  const newTasks = tasks.filter((task) => task.id !== id);
  setData(taskKey, newTasks);
};

const removeManyTask = (ids) => {
  const tasks = getData(taskKey);
  const newTasks = tasks.filter((task) => !ids.includes(task.id));
  setData(taskKey, newTasks);
};

// Hooks
const queryKey = "tasks";

const useTasks = (search) => {
  return useQuery([queryKey, search], () => getTasks(search), {
    staleTime: Infinity,
  });
};

const useCreatTask = () => {
  const queryClient = useQueryClient();
  return useMutation(createTask, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  });
};

const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation(updateTask, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  });
};

const useRemoveTask = () => {
  const queryClient = useQueryClient();
  return useMutation(removeTask, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  });
};

const useRemoveManyTask = () => {
  const queryClient = useQueryClient();
  return useMutation(removeManyTask, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  });
};

export {
  useTasks,
  useCreatTask,
  useUpdateTask,
  useRemoveTask,
  useRemoveManyTask,
};
