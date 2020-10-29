const db = {
  counter: 1,
  data: [],
}

// Return a copy of all todo items
const all = () => [...db.data]

// Retrieve a specific todo by it's ID
const get = (id) => db.data.find(todo => todo.id === id)

// Add a new todo to the db
const create = ({ label }) => {
  const todo = {
    id: db.counter,
    is_done: false,
    label,
  }

  db.data.push(todo)
  db.counter += 1

  return todo
}

// Update a todo in the db
const update = ({ id, label, is_done }) => {
  const index = db.data.findIndex(todo => todo.id === id)
  if (index === -1) {
    return
  }

  const old = get(id)
  label = (label === undefined) ? old.label : label
  is_done = (is_done === undefined) ? old.is_done : is_done

  db.data.splice(index, 1, {
    ...old,
    label,
    is_done,
  })

  return get(id)
}

// Remove a todo from the db
const destroy = (id) => {
  const index = db.data.findIndex(todo => todo.id === id)
  if (index === -1) {
    return
  }

  db.data.splice(index, 1)
}

// Truncate the db
const truncate = () => {
  db.counter = 1
  db.data = []
}

module.exports = {
  all,
  get,
  create,
  update,
  destroy,
  truncate,
}
