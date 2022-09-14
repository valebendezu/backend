const express = require('express')
const app = express()
const path = require('path')
const PORT = 3001

app.listen(PORT, () => console.log('listening on port', PORT))

app.get('/home', (req, res) => {
    res.send('hola gente!!')
})

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productos.html'))
})

app.get('/productos1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productos1.html'))
})