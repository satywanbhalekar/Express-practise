const express = require('express')
const router=express.Router()


const app = express()
const port = 3000



router.get('/', (req, res) => {
  res.send('Hello blog!')
})


router.get('/api', (req, res) => {
  res.json([{"id":1},{"id":2}])
  
})
module.exports=router