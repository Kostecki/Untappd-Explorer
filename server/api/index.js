const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Require API routes
const main = require('./routes/main.js')

// Middlware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Import API Routes
app.use(main)

module.exports = {
  path: '/api',
  handler: app
}