import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import * as TodoActions from '../../store/todo.actions';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  newTodo = {
    title: '',
    description: ''
  };

  constructor(private store: Store<AppState>) {}

  onSubmit(): void {
    if (this.newTodo.title.trim()) {
      this.store.dispatch(TodoActions.addTodo({
        todo: {
          title: this.newTodo.title.trim(),
          description: this.newTodo.description.trim(),
          completed: false
        }
      }));
      
      // Reset form
      this.newTodo = {
        title: '',
        description: ''
      };
    }
  }
} 