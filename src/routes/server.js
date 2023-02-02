const express = require('express');
const app = express();
app.user(express.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.send(productos)
})
app.get('/:pid', (req,res) => {
    res.send(productos)
})

app.get('/products', (req,res) => {
    res.send('Hola mundo')
})

app.get('/api/products/', (req,res) => {

})
app.get('/carts', (req,res) => {
    res.send('Hola mundo')
})

const server = app.listen(8080, () => console.log('Server listening on port 8080'))

server.on('error', error => console.log (error))
