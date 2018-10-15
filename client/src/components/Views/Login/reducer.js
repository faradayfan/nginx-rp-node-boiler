import { STARTING_LOGIN, LOGIN_SUCCESSFUL, LOGIN_FAILED, SET_JWT, CLEAR_LOGIN_ERRORS } from "./constants";


const initialState = {
  isLoggingIn: false,
  failureMessage: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case STARTING_LOGIN:
      return {
        ...state,
        isLoggingIn: true
      }
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoggingIn: false
      }
    case LOGIN_FAILED:
      return {
        ...state,
        failureMessage: action.failureMessage,
        isLoggingIn: false
      }
    case SET_JWT:
      return {
        ...state,
        jwt: action.jwt
      }
    case CLEAR_LOGIN_ERRORS:
      return {
        ...state,
        failureMessage: undefined
      }
    default:
      return {
        ...state
      }
  }
}