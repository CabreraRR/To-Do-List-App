const queries = {
	selectAll: 'SELECT * FROM to_do',
	insert: 'INSERT INTO to_do (title) VALUES ($1)',
	delete: 'DELETE FROM to_do WHERE id = $1'
}


//
// const addTask = {
//   insert: INSERT INTO to_do (title, description, completed) VALUES (/* put stuff here */)
// }
//
// const updateTitle = {
//   updateTitle: UPDATE to_do SET title = /* 'stuff' */ WHERE id = /* js stuff */;
// }
//
// const updateCompleted = {
//   updateCompleted: UPDATE to_do SET completed = /* stuff */ WHERE id = /* stuff */;
// }


module.exports = queries;
