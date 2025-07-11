import type { Meta, StoryObj } from '@storybook/angular';
import { TodoListComponent } from './todo-list.component';
import { createMockStore, createMockTodos } from '../../stories/mock-store';

const meta: Meta<TodoListComponent> = {
  title: 'Components/TodoList',
  component: TodoListComponent,
  decorators: [
    (story) => ({
      ...story(),
      providers: [createMockStore()]
    })
  ],
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TodoListComponent>;

export const Empty: Story = {
  args: {},
  decorators: [
    (story) => ({
      ...story(),
      providers: [createMockStore({
        todos: {
          todos: [],
          loading: false,
          error: null
        }
      })]
    })
  ]
};

export const WithTodos: Story = {
  args: {},
  decorators: [
    (story) => ({
      ...story(),
      providers: [createMockStore({
        todos: {
          todos: createMockTodos(5),
          loading: false,
          error: null
        }
      })]
    })
  ]
};

export const Loading: Story = {
  args: {},
  decorators: [
    (story) => ({
      ...story(),
      providers: [createMockStore({
        todos: {
          todos: [],
          loading: true,
          error: null
        }
      })]
    })
  ]
};

export const WithError: Story = {
  args: {},
  decorators: [
    (story) => ({
      ...story(),
      providers: [createMockStore({
        todos: {
          todos: [],
          loading: false,
          error: 'Failed to load todos'
        }
      })]
    })
  ]
};

export const MixedTodos: Story = {
  args: {},
  decorators: [
    (story) => ({
      ...story(),
      providers: [createMockStore({
        todos: {
          todos: [
            ...createMockTodos(3).map(todo => ({ ...todo, completed: true })),
            ...createMockTodos(2).map(todo => ({ ...todo, completed: false }))
          ],
          loading: false,
          error: null
        }
      })]
    })
  ]
}; 