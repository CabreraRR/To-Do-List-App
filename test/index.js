const expect = require('chai').expect
const database = require('../database/actions');
console.log(database)

describe('Action Query', (done) => {
  // beforeEach(() => {
  //   database.truncate()
  // })

  // before((done) => {
  //   this.todo = {
  //     title: 'run dishwasher',
  //     description: 'people need clean dishes',
  //     completed: true
  //   }
  //
  //   database.create(this.todo)
  //     .then(results => {
  //       done()
  //     })
  // })

  it ("it exists", () =>{
    expect(database.create('stuff')).to.exist
  })
  it ("Creates to do list item", () =>{
    expect(database.create('hello')).to.equal('new sticky created')
  })
  it ("Deletes to do list item", () =>{
    var test_data = {
       id: 2,
       title: 'more stuff',
       description: 'describe describe',
       completed: true
     }
    expect(database.delete(test_data.id)).to.equal('sticky has been deleted')
  })

  it ("Updates to do list item", () =>{
    var test_data = {
       id: 2,
       title: 'more stuff',
       description: 'describe describe',
       completed: true
     }
    expect(database.update("new list item", test_data.id)).to.equal('sticky has been updated')
  })


  // it('should give us all the todos',  (done) => {
  //   [{
  //    id: 2,
  //    title: 'more stuff',
  //    description: 'describe describe',
  //    completed: true },
  //   {
  //   id: 1,
  //   title: 'run dishwasher',
  //   description: 'descriptioney stuff',
  //   completed: false }]
  //
  //   // database.getAll()
  //     .then(results => {
  //       expect(results[0].title).to.eql('more stuff')
  //       done()
  //     // })
  // })
})
