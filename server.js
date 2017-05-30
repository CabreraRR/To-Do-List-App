var express = require('express')
var app = express()
var path = require('path')
var toDoListTable = require('./todo.sql')

app.set('view engine', 'ejs')
//app.set('views', path.join(__dirname, 'views'))

app.use('/', express.static(__dirname + '/public'));

app.use('/', index)

app.listen(3000, function(req, res){
  console.log('To-do list listening on port 3000')
})

module.exports = app
