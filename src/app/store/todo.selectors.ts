import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../models/todo.model';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectAllTodos = createSelector(
  selectTodoState,
  (state) => state.todos
);

export const selectTodosLoading = createSelector(
  selectTodoState,
  (state) => state.loading
);

export const selectTodosError = createSelector(
  selectTodoState,
  (state) => state.error
);

export const selectCompletedTodos = createSelector(
  selectAllTodos,
  (todos) => todos.filter(todo => todo.completed)
);

export const selectPendingTodos = createSelector(
  selectAllTodos,
  (todos) => todos.filter(todo => !todo.completed)
);

export const selectTodoById = (id: number) => createSelector(
  selectAllTodos,
  (todos) => todos.find(todo => todo.id === id)
); 