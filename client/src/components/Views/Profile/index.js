import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { userUpdateFailed, userUpdateSuccessful, startUserUpdate, clearUserUpdateErrors } from './actions'
import { setUser } from '../../../actions/identity'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: props.user.username,
      firstName: props.user.firstName,
      lastName: props.user.lastName,
      password: props.user.password
    }
  }

  clearErrors = () => {
    if (this.props.failureMessage)
      this.props.clearErrors()
  }

  handlerFieldChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
    this.clearErrors()
  }

  handleSave = (e) => {
    e.preventDefault()
    let user = Object.keys(this.state).reduce((acc, key) => {
      if (this.state[key] !== this.props.user[key]) {
        acc[key] = this.state[key]
      }
      return acc
    }, {})
    if (Object.keys(user).length > 0) {
      this.props.saveProfile(this.props.user._id, this.props.jwt, user)
    }
  }

  render() {
    const { isUpdatingUser } = this.props
    return (
      <div>
        <form onSubmit={this.handleSave}>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Username</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="username" value={this.state.username} onChange={this.handlerFieldChange} disabled={isUpdatingUser} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">First Name</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="firstName" value={this.state.firstName} onChange={this.handlerFieldChange} disabled={isUpdatingUser} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Last Name</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="lastName" value={this.state.lastName} onChange={this.handlerFieldChange} disabled={isUpdatingUser} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Password</label>
            <div className="col-sm-9">
              <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handlerFieldChange} disabled={isUpdatingUser} />
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit" disabled={isUpdatingUser}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = ({ identity }) => ({
  user: {
    ...identity.user,
    password: ''
  },
  jwt: identity.jwt
})

export const mapDispatchToProps = dispatch => ({
  saveProfile: (id, jwt, user) => {
    const opts = {
      headers: {
        authorization: jwt
      }
    }
    dispatch(startUserUpdate())
    axios.patch(`/api/users/${id}`, user, opts).then(result => {
      dispatch(userUpdateSuccessful())
      dispatch(setUser(result.data.result))
    }).catch(err => {
      dispatch(userUpdateFailed(err.response.data.message))
    })
  },
  clearErrors: () => {
    dispatch(clearUserUpdateErrors())
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(Home)