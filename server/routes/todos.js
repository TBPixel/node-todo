const express = require('express')
const db = require('../db/memorydb')
const { StatusCodes } = require('http-status-codes')

const router = express.Router()

// GET /api/todos
router.get('/', (req, res) => {
  res.json(db.all())
})

// GET /api/todos/1
router.get('/:id', (req, res) => {
  const todo = db.get(req.params.id)
  if (!todo) {
    res.status(StatusCodes.NOT_FOUND).json({ message: `Todo with id ${id} was not found` })
    return
  }

  res.json(todo)
})

// POST /api/todos
router.post('/', (req, res) => {
  const label = req.body.label
  if (!label) {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: 'A label is required' })
    return
  }

  const todo = db.create({ label })

  res.status(StatusCodes.CREATED).json(todo)
})

// PUT /api/todos/1
router.put('/:id', (req, res) => {
  const id = req.params.id
  const todo = db.update({
    id,
    label: req.body.label,
    is_done: req.body.is_done,
  })
  if (!todo) {
    res.status(StatusCodes.NOT_FOUND).json({ message: `Todo with id ${id} not found` })
    return
  }

  res.json(todo)
})

// DELETE /api/todos/1
router.delete('/:id', (req, res) => db.destroy(req.params.id))

module.exports = router
