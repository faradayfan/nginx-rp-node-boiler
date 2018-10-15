import { STARTING_LOGIN, LOGIN_SUCCESSFUL, LOGIN_FAILED, SET_JWT, CLEAR_LOGIN_ERRORS } from "./constants";


export const startLogin = () => {
  return {
    type: STARTING_LOGIN
  }
}

export const loginSuccessful = () => {
  return {
    type: LOGIN_SUCCESSFUL
  }
}

export const loginFailed = (message) => {
  return {
    type: LOGIN_FAILED,
    failureMessage: message
  }
}

export const clearLoginErrors = () => {
  return {
    type: CLEAR_LOGIN_ERRORS
  }
}

export const setJWT = (jwt) => {
  return {
    type: SET_JWT,
    jwt
  }
}