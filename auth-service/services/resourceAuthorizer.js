const authorizer = require('./authorizer')


/**
 * this is an object that implements 3 functions named after the subject class it is reponsible for authorizing
 * the functions must return a truthy or falsy value
 * the user id is found in the jwt, the resource id is the id that identities which record on the resourse the 
 * request is looking for
 */
const canAccessSubject = {
  self: (userId, resourceId) => {
    // verify against a resource owner of sorts
    return userId == resourceId // need to fix this to be smarter about what resources a user can access
  },
  role: () => {
    // verify against a shared role of some sort
    return false // not support right now
  },
  all: () => {
    return true // allow access to all subjects
  }
}

module.exports = authorizer(canAccessSubject)