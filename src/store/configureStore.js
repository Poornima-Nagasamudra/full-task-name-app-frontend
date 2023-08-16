import {createStore, combineReducers} from 'redux'
import personReducer from '../reducer/personReducer'
import { applyMiddleware } from 'redux'
import thunk  from 'redux-thunk'

const configureStore = () => {
    const store = createStore(combineReducers ({
        person: personReducer
    }), applyMiddleware(thunk))
    return store
      
}

export default configureStore