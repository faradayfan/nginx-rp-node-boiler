import { STARTING_USER_UPDATE, USER_UPDATE_FAILED, USER_UPDATE_SUCCESSFUL, CLEAR_USER_UPDATE_ERRORS } from "./constants";


const initialState = {
  isUpdatingUser: false,
  failureMessage: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case STARTING_USER_UPDATE:
      return {
        ...state,
        isUpdatingUser: true
      }
    case USER_UPDATE_FAILED:
      return {
        ...state,
        isUpdatingUser: false
      }
    case USER_UPDATE_SUCCESSFUL:
      return {
        ...state,
        failureMessage: action.failureMessage,
        isUpdatingUser: false
      }
    case CLEAR_USER_UPDATE_ERRORS:
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