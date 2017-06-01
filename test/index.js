const expect = require('chai').expect
const database = require('../database/actions');


describe('Select Query', (done) => {
  // beforeEach(() => {
  //   database.truncate()
  // })
  //
  // before((done) => {
  //   this.todo = {
  //     title: 'more stuff',
  //     description: 'describe describe',
  //     due_date: '2017-06-02T07:00:00.000Z',
  //     completed: true
  //   }
  //
  //   database.create(this.todo)
  //     .then(results => {
  //       done()
  //     })
  // })

  it('should give us all the todos',  (done) => {
  //   [{
  //    id: 2,
  //    title: 'more stuff',
  //    description: 'describe describe',
  //    due_date: 2017-06-02T07:00:00.000Z,
  //    completed: true },
    // {
  //   id: 1,
  //   title: 'input goes here',
  //   description: 'descriptioney stuff',
  //   due_date: 2017-06-01T07:00:00.000Z,
  //   completed: false }]

    database.getAll()
      .then(results => {
        expect(results[0].title).to.eql('more stuff')
        done()
      })
  })
})
