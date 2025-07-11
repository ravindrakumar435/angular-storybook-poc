# NgRx Todo CRUD App

A modern Todo application built with Angular 17 and NgRx for state management. This application demonstrates a complete CRUD (Create, Read, Update, Delete) implementation using NgRx store, effects, and selectors.

## Features

- ✅ **Create** new todos with title and description
- 📖 **Read** todos with separate sections for pending and completed tasks
- ✏️ **Update** todo titles and descriptions inline
- 🗑️ **Delete** todos with confirmation
- ✅ **Toggle** todo completion status
- 📊 **Statistics** showing total, pending, and completed tasks
- 💾 **Persistent storage** using localStorage
- 🎨 **Modern UI** with responsive design
- 🔄 **Real-time updates** with NgRx state management

## Tech Stack

- **Angular 17** - Latest Angular framework
- **NgRx** - State management library
  - Store - Central state management
  - Effects - Side effects handling
  - Selectors - State queries
  - DevTools - Development debugging
- **TypeScript** - Type-safe development
- **SCSS** - Advanced styling
- **RxJS** - Reactive programming

## Project Structure

```
src/app/
├── components/
│   ├── todo-list/          # Main todo list component
│   ├── todo-form/          # Add new todo form
│   └── todo-item/          # Individual todo item
├── models/
│   └── todo.model.ts       # Todo interface and state
├── store/
│   ├── todo.actions.ts     # NgRx actions
│   ├── todo.reducer.ts     # State reducer
│   ├── todo.effects.ts     # Side effects
│   ├── todo.selectors.ts   # State selectors
│   └── index.ts           # Store configuration
└── app.component.ts        # Root component
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ngrx-crud
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## Usage

### Adding a Todo
1. Enter a task title in the "Task Title" field
2. Optionally add a description
3. Click "Add Task" button

### Managing Todos
- **Complete a todo**: Click the checkbox next to the todo
- **Edit a todo**: Click the edit (✏️) button
- **Delete a todo**: Click the delete (🗑️) button

### Features
- **Responsive Design**: Works on desktop and mobile devices
- **Persistent Storage**: Todos are saved to localStorage
- **Real-time Statistics**: See total, pending, and completed task counts
- **Modern UI**: Clean, intuitive interface with smooth animations

## NgRx Implementation

### State Management
The app uses NgRx for predictable state management:

- **Actions**: Define all possible state changes
- **Reducers**: Pure functions that handle state transitions
- **Effects**: Handle side effects like localStorage operations
- **Selectors**: Efficient state queries with memoization

### Key Benefits
- **Predictable State**: All state changes go through actions
- **Developer Tools**: NgRx DevTools for debugging
- **Performance**: Optimized with selectors and memoization
- **Scalability**: Easy to add new features and state

## Development

### Available Commands

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run watch` - Build in watch mode

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
