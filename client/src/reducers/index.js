import { combineReducers } from 'redux'

import login from '../components/Views/Login/reducer'
import updateProfile from '../components/Views/Profile/reducer'
import identity from './identity'


export default combineReducers({
  identity,
  login,
  updateProfile
})