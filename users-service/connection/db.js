'use strict'

const mongoose = require('mongoose')

const db = mongoose
.connect('mongodb://localhost:27017/lib-man')
.then(() => console.log("Connection has been established successfully"))
.catch(err => console.log(err))

module.exports = db