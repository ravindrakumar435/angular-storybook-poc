# Storybook Setup for NgRx CRUD Application

This project includes Storybook for component development and testing. Storybook provides an isolated environment to develop and showcase your components.

## Getting Started

### Running Storybook

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006`

### Building Storybook

```bash
npm run build-storybook
```

This creates a static build of Storybook that can be deployed.

## Available Stories

### Components

1. **TodoItem** (`src/app/components/todo-item/todo-item.stories.ts`)
   - Default: Basic todo item
   - Completed: Completed todo item
   - LongTitle: Todo with long title
   - LongDescription: Todo with long description
   - RecentTodo: Recently created todo
   - OldTodo: Old todo item

2. **TodoForm** (`src/app/components/todo-form/todo-form.stories.ts`)
   - Default: Empty form
   - WithInitialValues: Form with pre-filled values
   - EmptyForm: Initial empty state

3. **TodoList** (`src/app/components/todo-list/todo-list.stories.ts`)
   - Empty: Empty todo list
   - WithTodos: List with multiple todos
   - Loading: Loading state
   - WithError: Error state
   - MixedTodos: Mix of completed and pending todos

4. **NgrxGuide** (`src/app/components/ngrx-guide/ngrx-guide.stories.ts`)
   - Default: Complete guide
   - WithRouter: Guide with routing

### App Stories

5. **TodoApp** (`src/app/stories/todo-app.stories.ts`)
   - CompleteApp: Full application with todos
   - EmptyApp: Empty application state
   - LoadingApp: Application in loading state

## Mock Store

The stories use a mock store (`src/app/stories/mock-store.ts`) to simulate NgRx state management without requiring the full application setup.

### Features

- **createMockStore()**: Creates a mock store with optional initial state
- **createMockTodo()**: Creates a mock todo with optional overrides
- **createMockTodos()**: Creates an array of mock todos

### Usage Example

```typescript
import { createMockStore, createMockTodos } from '../stories/mock-store';

// In a story decorator
decorators: [
  (Story) => ({
    ...Story(),
    providers: [createMockStore({
      todos: {
        todos: createMockTodos(5),
        loading: false,
        error: null
      }
    })]
  })
]
```

## Story Structure

Each story file follows this structure:

```typescript
import type { Meta, StoryObj } from '@storybook/angular';
import { ComponentName } from './component-name.component';

const meta: Meta<ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered', // or 'padded', 'fullscreen'
  },
  tags: ['autodocs'], // Enables automatic documentation
  argTypes: {
    // Define controls for component inputs
  }
};

export default meta;
type Story = StoryObj<ComponentName>;

export const Default: Story = {
  args: {
    // Component inputs
  }
};
```

## Controls and Actions

Stories include interactive controls for:
- Component inputs (via `argTypes`)
- Event emitters (via `actions`)
- State changes (via decorators)

## Documentation

Each component story includes:
- Automatic documentation generation
- Component usage examples
- Interactive controls
- Action logging

## Best Practices

1. **Isolation**: Each story should be independent and not rely on other stories
2. **Realistic Data**: Use realistic mock data that represents real usage
3. **Edge Cases**: Include stories for edge cases (empty states, loading, errors)
4. **Documentation**: Use `tags: ['autodocs']` for automatic documentation
5. **Testing**: Use the `play` function for interaction testing

## Troubleshooting

### Common Issues

1. **NgRx Store Errors**: Ensure mock store is properly configured in decorators
2. **Component Dependencies**: Make sure all required providers are included
3. **Import Errors**: Check that all imports are correct and available

### Debugging

- Use the Storybook Actions panel to see dispatched actions
- Check the Storybook Controls panel to modify component inputs
- Use the Storybook Docs panel for detailed documentation 