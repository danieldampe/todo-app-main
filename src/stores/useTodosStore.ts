import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

interface State {
  todos: Todo[]
}

interface Action {
  addTodo: (todo: Todo) => void
  markTodo: (id: Todo['id']) => void
  removeTodo: (id: Todo['id']) => void
  clear: () => void
}

const initialTodos: State['todos'] = [
  {
    id: '1',
    title: 'Complete online JavaScript course',
    completed: true
  },
  {
    id: '2',
    title: 'Jog around the park 3x',
    completed: false
  },
  {
    id: '3',
    title: '10 minutes meditation',
    completed: false
  },
  {
    id: '4',
    title: 'Read for 1 hour',
    completed: false
  },
  {
    id: '5',
    title: 'Pick up groceries',
    completed: false
  },
  {
    id: '6',
    title: 'Complete Todo App on Frontend Mentor',
    completed: false
  }
]

export const useTodosStore = create(
  persist<State & Action>(
    (set) => ({
      todos: initialTodos,
      addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
      markTodo: (id) => set((state) => {
        const newTodos = state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        return { todos: newTodos }
      }),
      removeTodo: (id) => set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) })),
      clear: () => set((state) => ({ todos: state.todos.filter(todo => !todo.completed) }))
    }),
    {
      name: 'todos-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
