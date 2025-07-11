import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, delay } from 'rxjs/operators';
import { Todo } from '../models/todo.model';
import * as TodoActions from './todo.actions';

@Injectable()
export class TodoEffects {
  // Simulate API calls with localStorage
  private getTodosFromStorage(): Todo[] {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
  }

  private saveTodosToStorage(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.loadTodos),
    mergeMap(() => {
      const todos = this.getTodosFromStorage();
      return of(TodoActions.loadTodosSuccess({ todos }));
    })
  ));

  addTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.addTodo),
    mergeMap(({ todo }) => {
      const todos = this.getTodosFromStorage();
      const newTodo: Todo = {
        ...todo,
        id: Date.now(),
        createdAt: new Date()
      };
      const updatedTodos = [...todos, newTodo];
      this.saveTodosToStorage(updatedTodos);
      return of(TodoActions.addTodoSuccess({ todo: newTodo }));
    })
  ));

  updateTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.updateTodo),
    mergeMap(({ todo }) => {
      const todos = this.getTodosFromStorage();
      const updatedTodos = todos.map(t => t.id === todo.id ? todo : t);
      this.saveTodosToStorage(updatedTodos);
      return of(TodoActions.updateTodoSuccess({ todo }));
    })
  ));

  deleteTodo$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.deleteTodo),
    mergeMap(({ id }) => {
      const todos = this.getTodosFromStorage();
      const updatedTodos = todos.filter(t => t.id !== id);
      this.saveTodosToStorage(updatedTodos);
      return of(TodoActions.deleteTodoSuccess({ id }));
    })
  ));

  constructor(private actions$: Actions) {}
} 