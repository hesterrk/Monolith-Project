//npm run dev to see this message in the terminal 
console.log('hello')
require('dotenv').config()

const express = require("express");
const cors = require('cors')

const server = express();
server.use(express.json())
server.use(cors())

const port = process.env.PORT || 5000

server.get('/api', (req, res) => {
    res.json({message: 'API works'})
})

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })