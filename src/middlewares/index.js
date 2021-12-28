const express = require('express')
const morgan = require('morgan')

module.exports = {
  middlewares: (app) => {
    app.use(morgan('dev'))
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
  }
}