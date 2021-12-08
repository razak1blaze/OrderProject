const express = require('express');
const mongoose = require('mongoose')

const app = express()
// mongodb URL
const url = ''
mongoose.connect(url, {useNewUrlParser: true})

const conect = mongoose.connection
const usersRoutes = require('./routes/users')
conect.on('open', function(){
    console.log("db connected succesfully!")
})
app.use(express.json())

app.use('/orders', usersRoutes)

app.listen('3000', () => {
    console.log("port listening on 3000")
})