
const jwt = require('jsonwebtoken')
const wildcard = require('wildcard')

const User = require('../models/users')
const constants = require('../constants')
const UnauthorizedError = require('../errors/UnauthorizedError')
const responseMapper = require('../mappings/responseMapper')



module.exports = (requiredClaim, allowedSubjects) => (req, res, next) => {

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

  try {

    if (!req.jwt)
      throw new UnauthorizedError("Missing authorization header")

    // this will create an array from the claims in the jwt that apply to this request
    // then it will get the longest matching claims to use that as the applicable claims.
    // in other words, the claim that most closely matches your request will be the claim 
    // used to authorize this request
    const defaultClaim = { path: '' }
    const applicableClaim = req.jwt.claims
      .filter(v => wildcard(`/${v.type}${v.path}`, req.originalUrl))
      .reduce((a, c) => a.path.length > c.path.length ? a : c, defaultClaim);
    // console.log(applicableClaim)
    // console.log(req.originalUrl)
    // console.log(req.method)
    if (defaultClaim == applicableClaim)
      throw new UnauthorizedError("You do not have the required claims for that resource (no claims)")

    if (!(applicableClaim.claims.includes(requiredClaim)
      && allowedSubjects.includes(applicableClaim.subject))) {
      // console.log(applicableClaim.claims.includes(requiredClaim), allowedSubjects.includes(applicableClaim.subject))
      // console.log("access denied", applicableClaim, requiredClaim, allowedSubjects)
      // general access based on claims and allowable subjects
      // these are for filtering out accessing subjects that the request has not claims to
      throw new UnauthorizedError("You do not have the required claims for that resource (no resources)")
    }

    if (!canAccessSubject[applicableClaim.subject](req.jwt.id, req.params.id))
      throw new UnauthorizedError("You do not have the claims to access that subjects resources")

    // console.log("can access all", applicableClaim, requiredClaim, allowedSubjects)
    return next()



  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }

}