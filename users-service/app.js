const express = require('express')
const app = express()
const port = 3000
const User = require('./models/User')

app.get('/', async (req, res) => {
  console.log("masuk")
  try {
    const result = await User.create({ firstname: 'boy' })
    console.log(result)
  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => {
  require('./connection/db')
  console.log(`Example app listening on port ${port}`)
})
