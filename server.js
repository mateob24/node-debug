const express = require('express')

const app = express()

app.get('/', (req, res) => {
  req.token = 10 + parseInt('10')
  res.text = 'secret'
  res.send('Hello world')
})

app.listen(3000)
console.log('Server is running on port 3000');
