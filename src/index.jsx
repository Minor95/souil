import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import { Provider } from 'react-redux'
import { store } from './redux/configureStore'
import "./components/scss/index.scss"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
