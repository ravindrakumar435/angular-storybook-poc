import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo.reducer';
import { TodoState } from '../models/todo.model';

export interface AppState {
  todos: TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: todoReducer
}; 