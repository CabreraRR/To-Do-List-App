let express = require('express')
let app = express()
const actions = require('./database/actions.js')
const queries = require('./database/queries.js')
const pgPromise = require('pg-promise')
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
  actions.getAll()
    .then(function(tasks){
      console.log('tasks:', tasks)
      res.render('index.ejs', {data: tasks})
    })
})

app.listen(3000)