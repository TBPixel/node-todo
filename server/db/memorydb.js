let counter = 1
let data = []

// Return a copy of all todo items
const all = () => [...data]

// Retrieve a specific todo by it's ID
const get = (id) => data.find(todo => todo.id === id)

// Add a new todo to the db
const create = ({ label }) => {
  const todo = {
    id: counter,
    is_done: false,
    label,
  }

  data.push(todo)
  counter += 1

  return todo
}

// Update a todo in the db
const update = ({ id, label, is_done }) => {
  const index = data.findIndex(todo => todo.id === id)
  if (!index) {
    return
  }

  const old = get(id)
  data[index] = {
    ...old,
    label: label || old.label,
    is_done: is_done || old.is_done,
  }

  return data[index]
}

// Remove a todo from the db
const destroy = (id) => {
  const index = data.findIndex(todo => todo.id === id)
  if (!index) {
    return
  }

  data.splice(index, 1)
}

module.exports = {
  all,
  get,
  create,
  update,
  destroy,
}
