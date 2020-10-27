const compression = require('compression')
const express = require('express')
const path = require('path')
const todos = require('./server/routes/todos')

const PORT = process.env.PORT || 5000
const app = express()

app.use(compression())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')))
app.use('/api/todos', todos)

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
