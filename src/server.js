const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('Ruta raiz')
})

app.get('/saludo', (req,res) => {
    res.send('Hola mundo')
})

const server = app.listen(8080, () => console.log('Server listening on port 8080'))

server.on('error', error => console.log (error))
