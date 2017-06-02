const queries = {
	selectAll: 'SELECT * FROM to_do',
	insert: 'INSERT INTO to_do (title) VALUES ($1)',
	delete: 'DELETE FROM to_do WHERE id = $1',
	update: 'UPDATE to_do SET title = $1 WHERE id = $2 RETURNING *'
}

module.exports = queries;
