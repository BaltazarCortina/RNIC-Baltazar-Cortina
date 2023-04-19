import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {Task} from '../../types';
import {mockTasks} from '../../utils/mocks/tasks';

export interface TaskState {
  tasksList: Task[];
  selectedTask?: Task;
}

const initialState: TaskState = {
  tasksList: mockTasks,
  selectedTask: undefined,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    changeTaskState: (state, action: PayloadAction<number>) => {
      state.tasksList.forEach(task => {
        if (task.id === action.payload) {
          task.status = !task.status;
        }
      });
    },
    addTask: (
      state,
      action: PayloadAction<{title: string; description: string; date: string}>,
    ) => {
      const newTask = {
        id: state.tasksList.length,
        title: action.payload.title,
        description: action.payload.description,
        date: action.payload.date,
        status: false,
      };
      state.tasksList.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasksList = state.tasksList.filter(
        task => task.id !== action.payload,
      );
    },
    editTask: (state, action: PayloadAction<{task: Task}>) => {
      const taskBody = action.payload.task;
      state.tasksList.forEach(task => {
        if (task.id === taskBody.id) {
          task.title = taskBody.title;
          task.description = taskBody.description;
          task.date = taskBody.date;
        }
      });
    },
    setTaskToEdit: (state, action: PayloadAction<number>) => {
      state.selectedTask = state.tasksList.find(
        task => task.id === action.payload,
      );
    },
    clearTask: state => {
      state.selectedTask = undefined;
    },
  },
});

export const {
  changeTaskState,
  addTask,
  deleteTask,
  setTaskToEdit,
  editTask,
  clearTask,
} = taskSlice.actions;

export default taskSlice.reducer;
