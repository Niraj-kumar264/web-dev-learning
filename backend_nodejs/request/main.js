const express = require('express');
const app = express()
const port = 5501
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.post('/', (req, res) => {
  console.log("hey its a post request")
  res.send('Hello World2!')
})

app.get('/index', (req, res) => {
  console.log("hey its a index")
  res.sendFile('templates/index.html', {root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/about/:slug', (req, res) => {
  res.send(`hello ${req.params.slug}!`) })