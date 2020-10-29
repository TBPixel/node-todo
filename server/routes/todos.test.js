const { StatusCodes } = require('http-status-codes')
const request = require('supertest')
const app = require('../app')
const db = require('../db/memorydb')

describe('Test the todos API', () => {
  afterEach(() => {
    db.truncate()
  })

  test('can create a new todo', () => {
    return request(app)
      .post('/api/todos')
      .send({ label: 'Foo bar' })
      .set('content-type', 'application/json')
      .expect(StatusCodes.CREATED)
      .then(response => () => {
        expect(response.body).objectContaining({
          label: 'Foo bar',
          is_done: false,
        })
      })
  })

  test('can get a list of todos', () => {
    db.create({ label: 'Foo bar' })

    return request(app)
      .get('/api/todos')
      .expect(StatusCodes.OK)
      .then(response => () => {
        expect(response.body).objectContaining([{
          label: 'Foo bar',
          is_done: false,
        }])
      })
  })

  test('can get a single todo', () => {
    const todo = db.create({ label: 'Foo bar' })

    return request(app)
      .get(`/api/todos/${todo.id}`)
      .expect(StatusCodes.OK)
      .then(response => () => {
        expect(response.body).objectContaining(todo)
      })
  })

  test('can update a todo', () => {
    const todo = db.create({ label: 'Foo bar' })

    return request(app)
      .put(`/api/todos/${todo.id}`)
      .send({ label: 'baz', is_done: true })
      .expect(StatusCodes.OK)
      .then(response => () => {
        expect(response.body).objectContaining({
          ...todo,
          label: 'baz',
          is_done: true,
        })
      })
  })

  test('can delete a todo', () => {
    const todo = db.create({ label: 'Foo bar' })

    return request(app)
      .delete(`/api/todos/${todo.id}`)
      .expect(StatusCodes.NO_CONTENT)
  })
})
