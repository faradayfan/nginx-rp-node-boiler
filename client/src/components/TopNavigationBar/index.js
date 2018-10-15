
import React, { Component } from 'react'
import NavigationItem from './NavigationItem'

export default class TopNavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarsExample02">
                    <ul className="navbar-nav mr-auto">
                        <NavigationItem to='/' label='Home' />
                        <NavigationItem to='/about' label='About' />
                        <NavigationItem to='/login' label='Login' />
                    </ul>
                </div>
            </nav>
        )
    }
}
