const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/getname', (req, res) => {
    res.send('Pakpiraporn Rakthinthai')
})

app.get('/getprofile', (req, res) => {
    let data = {
        name: 'Pakpiraporn Rakthinthai',
        age: 20,
        apocalypse: 'everyday is my day.' ,
        detail: ' Study Multimedia and Entertainment Engineering at School of Engineering, Bangkok University'
    }
    res.send(data)
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})