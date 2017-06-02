const expect = require('chai').expect
const database = require('../database/actions');
console.log(database)
describe('Action Query', (done) => {
	it("it exists", () => {
		expect(database.create('stuff')).to.exist
	})
	it("Creates to do list item", () => {
		expect(database.create('hello')).to.equal('new sticky created')
	})
	it("Deletes to do list item", () => {
		var test_data = {
			id: 2,
			title: 'more stuff',
			description: 'describe describe',
			completed: true
		}
		expect(database.delete(test_data.id)).to.equal('sticky has been deleted')
	})
	it("Updates to do list item", () => {
		var test_data = {
			id: 2,
			title: 'more stuff',
			description: 'describe describe',
			completed: true
		}
		expect(database.update("new list item", test_data.id)).to.equal('sticky has been updated')
	})
})
