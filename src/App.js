import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './Forms/Login'
import Selection from './Selection'
import './App.css'

function App() {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route exact path='/' render={() => <Selection />} />
                    <Route exact path='/login-form' render={() => <Login />} />
                    <Route
                        exact
                        path='/advanced-form'
                        render={() => <Login />}
                    />
                </Switch>
            </div>
        </Router>
    )
}

export default App
