import { SET_JWT, SET_USER, LOGOUT_USER } from "../constants/identity";


const initialState = {
  jwt: undefined,
  user: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_JWT:
      return {
        ...state,
        jwt: action.jwt
      }
    case SET_USER:
      return {
        ...state,
        user: action.user
      }
    case LOGOUT_USER:
      return {
        ...state,
        user: undefined,
        jwt: undefined
      }
    default:
      return {
        ...state
      }
  }
}