// const express = require('express')
const queries = require('./queries.js')
const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp({
	database: 'to_do_list'
})

const actions = {
	getAll: () => db.any(queries.selectAll),
	create: (title) => db.none(queries.insert, [title]),
	delete: (id) => db.none(queries.delete, [id]),
	update: (title, id) => db.one(queries.update, [title, id])
}

module.exports = actions
