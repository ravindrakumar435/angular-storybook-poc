import { provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../store';
import { Todo } from '../models/todo.model';

export const createMockStore = (initialState: Partial<AppState> = {}) => {
  const defaultState: AppState = {
    todos: {
      todos: [],
      loading: false,
      error: null
    }
  };

  const mergedState = {
    ...defaultState,
    ...initialState
  };

  return provideMockStore({
    initialState: mergedState
  });
};

export const createMockTodo = (overrides: Partial<Todo> = {}): Todo => {
  const defaultTodo: Todo = {
    id: 1,
    title: 'Sample Todo',
    description: 'This is a sample todo item',
    completed: false,
    createdAt: new Date('2024-01-01T10:00:00Z')
  };

  return { ...defaultTodo, ...overrides };
};

export const createMockTodos = (count: number = 3): Todo[] => {
  return Array.from({ length: count }, (_, index) => 
    createMockTodo({
      id: index + 1,
      title: `Todo ${index + 1}`,
      description: `Description for todo ${index + 1}`,
      completed: index % 2 === 0,
      createdAt: new Date(`2024-01-0${index + 1}T10:00:00Z`)
    })
  );
}; 