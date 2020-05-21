import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/auth/Login'
import Dashboard from './components/dashboard/Dashboard'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Switch>
          {/* authentication */}
          <Route exact path='/' component={Login} />

          {/* dashboard */}
          <Route path='/dashboard' component={Dashboard} />

        </Switch>

      </BrowserRouter>
    </Provider>
  )
}

export default App
