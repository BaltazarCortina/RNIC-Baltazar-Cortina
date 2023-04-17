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
      const newList = state.tasksList.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            status: !task.status,
          };
        }
        return task;
      });
      state.tasksList = newList;
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const newList = state.tasksList.filter(
        task => task.id !== action.payload,
      );
      state.tasksList = newList;
    },
    addTask: (
      state,
      action: PayloadAction<{title: string; description: string}>,
    ) => {
      const newTask = {
        id: state.tasksList.length,
        title: action.payload.title,
        description: action.payload.description,
        status: false,
      };
      state.tasksList.push(newTask);
    },
  },
});

export const {changeTaskState, addTask, deleteTask} = taskSlice.actions;

export default taskSlice.reducer;
