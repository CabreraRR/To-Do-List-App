// const express = require('express')
const queries = require('./queries.js')
const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp({
	database: 'to_do_list'
})

const actions = {
	getAll: () => db.any(queries.selectAll),
	create: (title) => {
		db.any(queries.insert, [title])
		// return 'new sticky created'
	},
	delete: (id) => {
		db.none(queries.delete, [id])
		// return 'sticky has been deleted'
	},
	update: (title, id) => {
		db.one(queries.update, [title, id])
		// return 'sticky has been updated'
	}
}

module.exports = actions
