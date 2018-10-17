import { STARTING_USER_UPDATE, USER_UPDATE_FAILED, USER_UPDATE_SUCCESSFUL, CLEAR_USER_UPDATE_ERRORS, CLEAR_USER_UPDATE_SUCCESS_MESSAGE } from "./constants";


const initialState = {
  isUpdatingUser: false,
  failureMessage: undefined,
  successMessage: undefined
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
        failureMessage: action.failureMessage,
        isUpdatingUser: false
      }
    case USER_UPDATE_SUCCESSFUL:
      return {
        ...state,
        successMessage: action.message,
        isUpdatingUser: false
      }
    case CLEAR_USER_UPDATE_ERRORS:
      return {
        ...state,
        failureMessage: undefined
      }
    case CLEAR_USER_UPDATE_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: undefined
      }
    default:
      return {
        ...state
      }
  }
}