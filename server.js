let express = require('express')
let app = express()
const actions = require('./database/actions.js')
const queries = require('./database/queries.js')
const pgPromise = require('pg-promise')
const path = require('path')
const bodyParser = require('body-parser')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({
	extended: false
}))
app.get('/', function (req, res) {
	console.log("string")
	actions.getAll()
		.then(function (tasks) {
			res.render('index.ejs', {
				data: tasks
			})
		})
})

app.post('/add', function (req, res) {
	actions.create(req.body.task)
		.then(function (data) {
			res.redirect('/')
			console.log('addition completed')
		})
})

app.post('/delete/:id', function (req, res) {
	actions.delete(req.params.id)
		.then(function () {
			res.redirect('/')
			console.log('deletion completed')
		})
})

app.post('/update', function (req, res) {
	actions.update(req.body.title, req.body.id)
		.then(function (todo) {
			res.json(todo)
			console.log('edit completed')
		})
})


app.listen(3000)
