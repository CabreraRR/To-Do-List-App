const queries = {
  selectAll: 'SELECT * FROM to_do',
  // insert: insert: INSERT INTO to_do (title, description, completed) VALUES ($1, $2, $3)
}
//
// const addTask = {
//   insert: INSERT INTO to_do (title, description, completed) VALUES (/* put js here */)
// }
//
// const removeTask = {
//   remove: DELETE FROM to_do WHERE id = /* js stuff */;
// }
//
// const updateTitle = {
//   updateTitle: UPDATE to_do SET title = /* 'js stuff' */ WHERE id = /* js stuff */;
// }
//
// const updateCompleted = {
//   updateCompleted: UPDATE to_do SET completed = /* js stuff */ WHERE id = /* js stuff */;
// }


module.exports = queries;
