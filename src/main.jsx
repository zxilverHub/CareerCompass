import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import domain from './redux/domain.jsx'
import apps from './redux/apps.jsx'
import user from './redux/user.jsx'

const store =  configureStore({
  reducer: {
    domain: domain,
    apps: apps,
    user: user
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
