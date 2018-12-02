const express = require('express')
const path = require('path')
const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache',require('hogan-middleware').__express)

app.get('/',(req,res,next) => {
    res.send('Hello!')
})
app.get('/json',(req,res,next) => {
  const data ={
    greeting : 'Hello'
  }
    res.json(data)
})

app.get('/home',(req,res,next) => {
  res.render('home', null)
})

app.listen(3000)
