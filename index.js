//npm run dev to see this message in the terminal 
console.log('hello')
require('dotenv').config()
//specify folder for static assets (index.html, js)
const path = require('path')

const express = require("express");
const cors = require('cors')

const server = express();
server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname, 'client/build')))


const port = process.env.PORT || 5000

server.get('/api', (req, res) => {
    res.json({message: 'API works'})
})

//FALLBACK endpoint that will send back our index.html with the CRA
server.get("*", (req, res) => {
    //send back the index.html contained inside the client/build 
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })