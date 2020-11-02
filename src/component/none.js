document.querySelector('class', ()=>{
    console.log('up and running')
})

io.on('connection', (socket)=>{
    console.log('good to go')
})

const express = require('express')

const app = express()

app.get('./', (req, res) =>{
    res.send('running port 5000')
})
git config http.postBuffer 524288000