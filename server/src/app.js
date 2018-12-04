const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()

// Log Generator - Morgan
app.use(morgan('combined'))

// For parsing JSON data/requests
app.use(bodyParser.json())

// For allowing any host to hit server
app.use(cors())

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })

