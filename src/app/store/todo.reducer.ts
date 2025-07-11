import { createReducer, on } from '@ngrx/store';
import { TodoState } from '../models/todo.model';
import * as TodoActions from './todo.actions';

export const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null
};

export const todoReducer = createReducer(
  initialState,
  
  // Load Todos
  on(TodoActions.loadTodos, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    loading: false
  })),
  on(TodoActions.loadTodosFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  // Add Todo
  on(TodoActions.addTodo, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(TodoActions.addTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
    loading: false
  })),
  on(TodoActions.addTodoFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  // Update Todo
  on(TodoActions.updateTodo, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(TodoActions.updateTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: state.todos.map(t => t.id === todo.id ? todo : t),
    loading: false
  })),
  on(TodoActions.updateTodoFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  // Delete Todo
  on(TodoActions.deleteTodo, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(TodoActions.deleteTodoSuccess, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(t => t.id !== id),
    loading: false
  })),
  on(TodoActions.deleteTodoFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  // Toggle Todo
  on(TodoActions.toggleTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  }))
); 