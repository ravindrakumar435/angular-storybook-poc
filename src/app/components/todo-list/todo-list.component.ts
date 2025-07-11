import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { AppState } from '../../store';
import * as TodoActions from '../../store/todo.actions';
import * as TodoSelectors from '../../store/todo.selectors';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemComponent, TodoFormComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  completedTodos$: Observable<Todo[]>;
  pendingTodos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select(TodoSelectors.selectAllTodos);
    this.loading$ = this.store.select(TodoSelectors.selectTodosLoading);
    this.error$ = this.store.select(TodoSelectors.selectTodosError);
    this.completedTodos$ = this.store.select(TodoSelectors.selectCompletedTodos);
    this.pendingTodos$ = this.store.select(TodoSelectors.selectPendingTodos);
  }

  ngOnInit(): void {
    this.store.dispatch(TodoActions.loadTodos());
  }

  onToggleTodo(id: number): void {
    this.store.dispatch(TodoActions.toggleTodo({ id }));
  }

  onDeleteTodo(id: number): void {
    this.store.dispatch(TodoActions.deleteTodo({ id }));
  }

  onUpdateTodo(todo: Todo): void {
    this.store.dispatch(TodoActions.updateTodo({ todo }));
  }

  trackByTodoId(index: number, todo: Todo): number {
    return todo.id;
  }
} 