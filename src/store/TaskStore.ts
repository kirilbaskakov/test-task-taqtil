import { create } from 'zustand';
import { createJSONStorage,persist } from 'zustand/middleware';

import ITask, { Status } from '@/types/ITask';

interface TaskStore {
  tasks: ITask[];
  createTask: (name: string, status: Status) => void;
  editTask: (id: number, name: string, status: Status) => void;
  deleteTask: (id: number) => void;
  setTasks: (tasks: ITask[]) => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      createTask: (name: string, status: Status) => {
        const tasks = get().tasks;
        const lastId = tasks[tasks.length - 1]?.id ?? 0;
        const newTask: ITask = {
          id: lastId + 1,
          name,
          status,
          createdAt: new Date().toISOString()
        };
        set(state => ({ tasks: [...state.tasks, newTask] }));
      },
      setTasks: (tasks: ITask[]) => {
        set(() => ({ tasks }));
      },
      editTask: (id, name, status) => {
        set(state => ({
          tasks: state.tasks.map(task =>
            task.id === id ? { ...task, name, status } : task
          )
        }));
      },
      deleteTask: id => {
        set(state => ({
          tasks: state.tasks.filter(task => task.id !== id)
        }));
      }
    }),
    {
      name: 'tasks-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);
