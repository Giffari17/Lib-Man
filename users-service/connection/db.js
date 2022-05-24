'use strict'

const mongoose = require('mongoose')

const db = mongoose
.connect('mongodb://localhost:27017/testing')
.then(() => console.log("Connection is established successfully"))
.catch(err => console.log(err))

module.exports = db