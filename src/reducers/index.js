import {combineReducers} from 'redux'
import homeState from './routerReducer/homeReducer'

const rootReducer = combineReducers({
  homeState
})

export default rootReducer