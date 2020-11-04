import { TodoProvider } from './store'

function Todos() {
  return (
    <TodoProvider>
      <div>todos</div>
    </TodoProvider>
  )
}

export default Todos
