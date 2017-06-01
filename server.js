let express = require('express')
let app = express()
const actions = require('./database/actions.js')
const queries = require('./database/queries.js')
const pgPromise = require('pg-promise')
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
  actions.getAll()
    .then(function(tasks){
      res.render('index.ejs', {data: tasks})
    })
})

// app.post('/add/:task', function(reg, res){
//   actions.create(req.body.something)
//     .then(function(tasks){
//
//     })
// })

app.listen(3000)
