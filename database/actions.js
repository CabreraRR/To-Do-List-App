let express = require('express')
const queries = require('./queries.js')
const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp({database: 'to_do_list'})
const actions = {
  getAll: () => db.any(queries.selectAll)
}

module.exports = actions;
