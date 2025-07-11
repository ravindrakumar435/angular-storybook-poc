import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ngrx-guide',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ngrx-guide.component.html',
  styleUrls: ['./ngrx-guide.component.scss']
})
export class NgrxGuideComponent {
  steps = [
    {
      title: '1. Install NgRx Packages',
      description: 'Install the required NgRx packages for state management',
      code: `npm install @ngrx/store@17 @ngrx/effects@17 @ngrx/entity@17 @ngrx/store-devtools@17`,
      explanation: 'Install NgRx store, effects, entity, and devtools packages compatible with Angular 17'
    },
    {
      title: '2. Create State Interface',
      description: 'Define the state structure for your application',
      code: `// models/todo.model.ts
export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}`,
      explanation: 'Define the data structure and state interface for type safety'
    },
    {
      title: '3. Create Actions',
      description: 'Define all possible state changes as actions',
      code: `// store/todo.actions.ts
import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

// Load Todos
export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: Todo[] }>()
);
export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: string }>()
);

// Add Todo
export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ todo: Omit<Todo, 'id' | 'createdAt'> }>()
);
export const addTodoSuccess = createAction(
  '[Todo] Add Todo Success',
  props<{ todo: Todo }>()
);`,
      explanation: 'Actions define all possible state changes with descriptive names and payloads'
    },
    {
      title: '4. Create Reducer',
      description: 'Handle state transitions based on actions',
      code: `// store/todo.reducer.ts
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
  on(TodoActions.addTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
    loading: false
  }))
);`,
      explanation: 'Reducers are pure functions that handle state transitions based on dispatched actions'
    },
    {
      title: '5. Create Effects',
      description: 'Handle side effects like API calls',
      code: `// store/todo.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as TodoActions from './todo.actions';

@Injectable()
export class TodoEffects {
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
      const newTodo = { ...todo, id: Date.now(), createdAt: new Date() };
      this.saveTodosToStorage([...this.getTodosFromStorage(), newTodo]);
      return of(TodoActions.addTodoSuccess({ todo: newTodo }));
    })
  ));

  constructor(private actions$: Actions) {}
}`,
      explanation: 'Effects handle side effects like API calls, localStorage operations, and other async operations'
    },
    {
      title: '6. Create Selectors',
      description: 'Create efficient state queries',
      code: `// store/todo.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../models/todo.model';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectAllTodos = createSelector(
  selectTodoState,
  (state) => state.todos
);

export const selectCompletedTodos = createSelector(
  selectAllTodos,
  (todos) => todos.filter(todo => todo.completed)
);

export const selectPendingTodos = createSelector(
  selectAllTodos,
  (todos) => todos.filter(todo => !todo.completed)
);`,
      explanation: 'Selectors provide efficient, memoized access to state data'
    },
    {
      title: '7. Configure Store',
      description: 'Set up the store in your app configuration',
      code: `// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './store';
import { TodoEffects } from './store/todo.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(reducers),
    provideEffects([TodoEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      trace: false,
      traceLimit: 75,
    })
  ]
};`,
      explanation: 'Configure the store, effects, and devtools in your app configuration'
    },
    {
      title: '8. Use in Components',
      description: 'Dispatch actions and select state in components',
      code: `// todo-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TodoActions from '../store/todo.actions';
import * as TodoSelectors from '../store/todo.selectors';

@Component({
  selector: 'app-todo-list',
  template: \`
    <div *ngFor="let todo of todos$ | async">
      {{ todo.title }}
      <button (click)="toggleTodo(todo.id)">Toggle</button>
    </div>
  \`
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(TodoSelectors.selectAllTodos);
  }

  ngOnInit(): void {
    this.store.dispatch(TodoActions.loadTodos());
  }

  toggleTodo(id: number): void {
    this.store.dispatch(TodoActions.toggleTodo({ id }));
  }
}`,
      explanation: 'Use the store in components to dispatch actions and select state data'
    }
  ];

  benefits = [
    {
      title: 'Predictable State',
      description: 'All state changes go through actions, making state changes predictable and debuggable'
    },
    {
      title: 'Developer Tools',
      description: 'NgRx DevTools provide powerful debugging capabilities with time-travel debugging'
    },
    {
      title: 'Performance',
      description: 'Selectors with memoization provide efficient state access and prevent unnecessary re-renders'
    },
    {
      title: 'Scalability',
      description: 'Well-structured state management that scales with application complexity'
    },
    {
      title: 'Testing',
      description: 'Pure functions (reducers, selectors) and isolated effects make testing straightforward'
    }
  ];

  bestPractices = [
    'Use descriptive action names with domain prefix (e.g., [Todo] Load Todos)',
    'Keep reducers pure and side-effect free',
    'Use selectors for state access to enable memoization',
    'Handle loading and error states in your state',
    'Use TypeScript for type safety throughout',
    'Structure your store with feature modules for large applications',
    'Use effects for all side effects (API calls, localStorage, etc.)',
    'Keep actions simple and focused on single responsibilities'
  ];

  trackByIndex(index: number): number {
    return index;
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      // You could add a toast notification here
      console.log('Code copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
} 