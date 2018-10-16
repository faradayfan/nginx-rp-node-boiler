
import React, { Component } from 'react'
import NavigationItem from './NavigationItem'
import { logoutUser } from '../../actions/identity'
import { connect } from "react-redux"

class TopNavigationBar extends Component {

    loginLogoutLink(user, logoutHandler) {
        if (user) {
            return (
                <NavigationItem onClick={logoutHandler} to='/login' label='Logout' />
            )
        } else {
            return <NavigationItem to='/login' label='Login' />
        }
    }

    profileLink(user) {
        if (user) {
            return (
                <NavigationItem to='/profile' label='Profile' />
            )
        }
    }
    render() {
        const { user, logoutUser } = this.props

        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarsExample02">
                    <ul className="navbar-nav mr-auto">
                        <NavigationItem to='/' label='Home' />
                        <NavigationItem to='/about' label='About' />
                        {this.loginLogoutLink(user, logoutUser)}
                        {this.profileLink(user)}
                    </ul>
                </div>
            </nav>
        )
    }
}

export const mapStateToProps = ({ identity }) => ({
    user: identity.user
})

export const mapDispatchToProps = dispatch => ({
    logoutUser: () => {
        dispatch(logoutUser())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TopNavigationBar)