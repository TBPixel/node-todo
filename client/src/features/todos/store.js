import { createContext, useContext, useReducer } from 'react'

const TodoStateContext = createContext()
const TodoDispatchContext = createContext()

function todoReducer(state, action) {
  switch (action.type) {
    case 'create': {
      return [...state, action.todo]
    }
    case 'update': {
      const index = state.findIndex(todo => todo.id === action.id)
      if (index === -1) {
        throw new Error(`Unknown todo with id: ${action.id}`)
      }

      state[index] = {...state[index], ...action.todo}

      return state
    }
    case 'delete': {
      return state.filter(todo => todo.id !== action.id)
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function TodoProvider({children}) {
  const [state, dispatch] = useReducer(todoReducer, [])
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

function useTodoState() {
  const context = useContext(TodoStateContext)
  if (context === undefined) {
    throw new Error('useTodoState must be used within a TodoProvider')
  }
  return context
}

function useTodoDispatch() {
  const context = useContext(TodoDispatchContext)
  if (context === undefined) {
    throw new Error('useTodoDispatch must be used within a TodoProvider')
  }
  return context
}

function useTodo() {
  return [useTodoState(), useTodoDispatch()]
}

export { TodoProvider, useTodoState, useTodoDispatch, useTodo }
