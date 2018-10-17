import { STARTING_USER_UPDATE, USER_UPDATE_FAILED, USER_UPDATE_SUCCESSFUL, CLEAR_USER_UPDATE_ERRORS, CLEAR_USER_UPDATE_SUCCESS_MESSAGE } from "./constants";


export const startUserUpdate = () => {
  return {
    type: STARTING_USER_UPDATE
  }
}

export const userUpdateSuccessful = (message) => {
  return {
    type: USER_UPDATE_SUCCESSFUL,
    message
  }
}

export const userUpdateFailed = (message) => {
  return {
    type: USER_UPDATE_FAILED,
    failureMessage: message
  }
}

export const clearUserUpdateErrors = () => {
  return {
    type: CLEAR_USER_UPDATE_ERRORS
  }
}

export const clearUserUpdateSuccessMessage = () => {
  return {
    type: CLEAR_USER_UPDATE_SUCCESS_MESSAGE
  }
}