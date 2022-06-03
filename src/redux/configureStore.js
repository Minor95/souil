import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import authorization from './features/authorization'
import posts from './features/posts'

export const store = createStore(
  combineReducers({
    authorization,
    posts,
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
