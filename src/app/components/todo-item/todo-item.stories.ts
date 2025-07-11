import type { Meta, StoryObj } from '@storybook/angular';
import { TodoItemComponent } from './todo-item.component';
import { createMockTodo } from '../../stories/mock-store';

const meta: Meta<TodoItemComponent> = {
  title: 'Components/TodoItem',
  component: TodoItemComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    todo: {
      control: 'object',
      description: 'The todo item to display'
    },
    toggle: {
      action: 'toggle',
      description: 'Event emitted when todo is toggled'
    },
    delete: {
      action: 'delete',
      description: 'Event emitted when todo is deleted'
    },
    update: {
      action: 'update',
      description: 'Event emitted when todo is updated'
    }
  }
};

export default meta;
type Story = StoryObj<TodoItemComponent>;

export const Default: Story = {
  args: {
    todo: createMockTodo()
  }
};

export const Completed: Story = {
  args: {
    todo: createMockTodo({
      title: 'Completed Todo',
      description: 'This todo is marked as completed',
      completed: true
    })
  }
};

export const LongTitle: Story = {
  args: {
    todo: createMockTodo({
      title: 'This is a very long todo title that might wrap to multiple lines and test the component layout',
      description: 'A todo with a very long title to test how the component handles text overflow'
    })
  }
};

export const LongDescription: Story = {
  args: {
    todo: createMockTodo({
      title: 'Todo with Long Description',
      description: 'This is a very long description that contains multiple sentences and should test how the component handles long text content. It might wrap to multiple lines and should still look good in the UI.'
    })
  }
};

export const RecentTodo: Story = {
  args: {
    todo: createMockTodo({
      title: 'Recent Todo',
      description: 'Created just now',
      createdAt: new Date()
    })
  }
};

export const OldTodo: Story = {
  args: {
    todo: createMockTodo({
      title: 'Old Todo',
      description: 'Created a long time ago',
      createdAt: new Date('2023-01-01T10:00:00Z')
    })
  }
}; 