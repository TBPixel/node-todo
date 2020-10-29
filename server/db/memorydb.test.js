const db = require('./memorydb')

const todo = {
    label: 'foo bar',
    is_done: false,
}

describe('Test the in-memory db mock', () => {
  afterEach(() => {
    db.truncate()
  })

  test('can create a new todo', () => {
    const got = db.create({ label: 'foo' })

    expect(db.get(1)).toEqual(got)
  })

  test('can fetch all current todos', () => {
    db.create({ label: todo.label })

    expect(db.all()).toEqual([{...todo, id: 1}])
  })

  test('can fetch specific todo', () => {
    db.create({ label: todo.label })

    expect(db.get(1)).toEqual({...todo, id: 1})
  })

  test('can update specific todo', () => {
    db.create({ label: todo.label })
    const want = { ...todo, id: 1, is_done: true }
    db.update(want)

    expect(db.get(want.id)).toEqual(want)
  })

  test('can delete specific todo', () => {
    db.create({ label: todo.label })
    expect(db.all().length).toBe(1)

    db.destroy(1)
    expect(db.all().length).toBe(0)
  })
})
