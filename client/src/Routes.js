
import React, { Component } from 'react'

import { Route } from 'react-router'
import { Home, About, Login, Profile } from './components/Views'

class Routes extends Component {
    render() {
        return (
            <div id='main'>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
            </div>
        )
    }
}


export default Routes
