const express = require('express')
const blog =require('./routes/blog')

const app = express()
const port = 3000

app.use('/blog',blog)


app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.get('/index', (req, res) => {
  res.sendFile('templets/index.html',{root:__dirname})
  
})
app.get('/api', (req, res) => {
  res.json([{"id":1},{"id":2}])
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})