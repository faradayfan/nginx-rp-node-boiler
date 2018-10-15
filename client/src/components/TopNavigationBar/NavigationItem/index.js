import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavigationItem extends Component {
    render() {
        return (
            <li className="nav-item">
                <Link to={this.props.to} className="nav-link">{this.props.label}</Link>
            </li>
        )
    }
}
