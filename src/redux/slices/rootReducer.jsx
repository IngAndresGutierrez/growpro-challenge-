/* import external modules */
import { combineReducers } from 'redux'

/* import internal modules */
import user from './userSlice'
import commons from './commonsSlice'

const rootReducer = combineReducers({
  user,
  commons,
})

export default rootReducer
