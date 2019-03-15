import {combineReducers} from 'redux'
import choresReducer from './choresReducer'
import todoReducer from './todoReducer'
import groceriesReducer from './groceriesReducer'

const rootReducer = combineReducers({
    choresReducer: choresReducer,
    todoReducer: todoReducer,
    groceriesReducer: groceriesReducer
})

export default rootReducer
