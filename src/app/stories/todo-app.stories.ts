import type { Meta, StoryObj } from '@storybook/angular';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { createMockStore, createMockTodos } from './mock-store';

const meta: Meta<TodoListComponent> = {
  title: 'App/TodoApp',
  component: TodoListComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => ({
      ...Story(),
      providers: [createMockStore()]
    })
  ]
};

export default meta;
type Story = StoryObj<TodoListComponent>;

export const CompleteApp: Story = {
  args: {},
  decorators: [
    (Story) => ({
      ...Story(),
      providers: [createMockStore({
        todos: {
          todos: createMockTodos(8),
          loading: false,
          error: null
        }
      })]
    })
  ],
  parameters: {
    docs: {
      description: {
        story: 'Complete todo application with form, list, and individual todo items working together'
      }
    }
  }
};

export const EmptyApp: Story = {
  args: {},
  decorators: [
    (Story) => ({
      ...Story(),
      providers: [createMockStore({
        todos: {
          todos: [],
          loading: false,
          error: null
        }
      })]
    })
  ],
  parameters: {
    docs: {
      description: {
        story: 'Todo application in its initial empty state'
      }
    }
  }
};

export const LoadingApp: Story = {
  args: {},
  decorators: [
    (Story) => ({
      ...Story(),
      providers: [createMockStore({
        todos: {
          todos: [],
          loading: true,
          error: null
        }
      })]
    })
  ],
  parameters: {
    docs: {
      description: {
        story: 'Todo application in loading state'
      }
    }
  }
}; 