import {Task} from '../../types';

export const mockTasks: Task[] = [
  {
    id: 0,
    title: 'This is a task',
    description: 'This is the description',
    status: false,
    image: 'shopping',
  },
  {
    id: 1,
    title: 'This is another task',
    description:
      'This is a very long description that is going to need more than two lines. This is to test if the number of lines is working correctly',
    status: false,
    image: 'notes',
  },
  {
    id: 2,
    title: 'This is a task with a very long title, it should take two lines',
    description: 'This is the description',
    status: false,
    image: 'gym',
  },
  {
    id: 3,
    title: 'This is a completed task',
    description: 'This is the description',
    status: true,
  },
];
