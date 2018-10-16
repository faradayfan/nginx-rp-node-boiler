import { SET_JWT, SET_USER, LOGOUT_USER } from "../constants/identity";

export const setJWT = (jwt) => {
  return {
    type: SET_JWT,
    jwt
  }
}

export const setUser = (user) => {
  return {
    type: SET_USER,
    user
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}