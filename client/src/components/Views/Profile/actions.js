import { STARTING_USER_UPDATE, USER_UPDATE_FAILED, USER_UPDATE_SUCCESSFUL, CLEAR_USER_UPDATE_ERRORS } from "./constants";


export const startUserUpdate = () => {
  return {
    type: STARTING_USER_UPDATE
  }
}

export const userUpdateSuccessful = () => {
  return {
    type: USER_UPDATE_SUCCESSFUL
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
