
import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Home, About, Login, Profile, UpdateProfile, NotFound } from './components/Views'

class Routes extends Component {
    render() {
        return (
            <div id='main'>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} exact />
                    <Route path="/profile/update" component={UpdateProfile} exact />
                    <Route path="*" component={NotFound} exact />
                </Switch>
            </div>
        )
    }
}




export default Routes
