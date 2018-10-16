import { combineReducers } from 'redux'

import login from '../components/Views/Login/reducer'
import identity from './identity'


export default combineReducers({
  identity,
  login
})