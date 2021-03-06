# To-Do-List-App
- **Name:** Emma Brown & Roel Cabrera
- **Github handle:** maighdlyn, CabreraRR
- **Team name:** tacky-viper

## Installation

- Clone github repository
- Run ```npm install```
- Run ``` npm install body-parser```
- Run ```psql < database/todo.sql```
- Run ```npm start```
- Navigate to ```http://localhost:3000```

## Specifications

#### General
- [x] Code uses a linter and there are no linting errors.
- [x] Repository includes a README file with basic installation and setup.
- [x] All dependencies are properly declared in `package.json`.
- [x] All major features are added via pull requests with a clear description and concise commit messages.
- [x] Every pull request has been reviewed by at least one other person.
- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

#### Functionality
- [x] Users can create to do list items.
- [x] Users can delete unwanted to do list items.
- [x] Users can check items off as completed.
- [x] Users can edit the text on existing to do list items.
- [x] UI renders to do items differently when they are completed (using a checkbox or some other indicator).
- [x] When an error occurs, the user is notified with modal message.\*
- [x] Backend uses Node.js and [Express][npm-express].
- [x] App persists to do list items in a database.

#### Testing
There are thorough tests for all functionality involved in interacting with the database.
- [x] There are tests for creating to do list items.
- [x] There are tests for deleting to do list items.
- [ ] There are tests for completing to do list items.
- [x] There are tests for editing to do list items.
- [x] All tests are passing.

\* A quick and easy way to do this is to use the `alert()` function.

### Stretch

- [ ] App is deployed on Heroku.
- [ ] Users can rearrange to do list items.
- [ ] Users can create multiple to-do lists.
- [ ] Users have their own account and can sign up and log in/out.
- [ ] App is written with ES6 and compiled using [babel][npm-babel].
