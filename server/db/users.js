const {generatePasswordHash} = require('../auth/hash')

const connection = require('./connection')

function createUser (username, first_name, last_name, password, testDb) {
  const db = testDb || connection
  return generatePasswordHash(password)
    .then(hash => {
      return db('users').insert({username, first_name, last_name, hash})
    })
}

function userExists (email, testDb) {
  const db = testDb || connection
  return db('users')
    .where('email', email)
    .then(users => users.length > 0)
}

function getUserByEmail (email, testDb) {
  const db = testDb || connection
  return db('users')
    .where('email', email)
    .first()
}

module.exports = {
  createUser,
  userExists,
  getUserByEmail
}