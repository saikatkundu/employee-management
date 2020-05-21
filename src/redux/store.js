import { applyMiddleware, createStore } from 'redux'
// import { logger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default store