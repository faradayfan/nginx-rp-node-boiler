
import React, { Component } from 'react'

import { Route } from 'react-router'
import { Home, About, Login } from './components/Views'

export default class Routes extends Component {
    render() {
        return (
            <div id='main'>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
            </div>
        )
    }
}
