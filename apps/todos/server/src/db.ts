import { Database } from '@ng-neer/todos-api';

export const db: Database = {
  todos: [
    {
      id: '1',
      title: 'Start project',
      description: 'Start the application',
      timestamp: new Date(2024, 1, 23, 11).getTime(),
    },
    {
      id: '2',
      title: 'Display the todos list',
      description:
        "Make sure that you display each todo' title and description",
      timestamp: new Date(2024, 1, 23, 11).getTime(),
    },
  ],
};
