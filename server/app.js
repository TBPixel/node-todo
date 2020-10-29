const compression = require('compression')
const express = require('express')
const path = require('path')
const todos = require('./routes/todos')

const app = express()

app.use(compression())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')))
app.use('/api/todos', todos)

module.exports = app
