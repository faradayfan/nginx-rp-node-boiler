import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setJWT, setUser } from '../../../actions/identity'
import { startLogin, loginSuccessful, loginFailed, clearLoginErrors } from './actions'
import ErrorMessage from './components/ErrorMessage'
import './index.css'


class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value })
    if (this.props.failureMessage)
      this.props.clearErrors()
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
    if (this.props.failureMessage)
      this.props.clearErrors()
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()
    this.props.handleLogin(this.state.username, this.state.password, this.props.history)
  }

  render() {
    const { username, password } = this.state
    const { isLoggingIn, failureMessage } = this.props
    return (
      <form onSubmit={this.handleLoginSubmit} >
        <div className="form-group">
          <input required disabled={isLoggingIn} type="text" value={username} onChange={this.handleUsernameChange} className="form-control" id="username-input" aria-describedby="emailHelp" placeholder="username" />
        </div>
        <div className="form-group">
          <input required disabled={isLoggingIn} type="password" value={password} onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group">
          <button disabled={isLoggingIn} className="btn btn-primary btn-block" type="submit">Submit</button>
        </div>
        <ErrorMessage message={failureMessage} />
      </form>
    )
  }
}

export const mapStateToProps = ({ login }) => ({
  isLoggingIn: login.isLoggingIn,
  failureMessage: login.failureMessage
})

export const mapDispatchToProps = dispatch => ({
  handleLogin: (username, password, history) => {
    dispatch(startLogin())
    axios.post('/api/auth/jwt/authenticate', { username, password }).then(result => {
      dispatch(setJWT(result.data.result.jwt))
      const opts = {
        headers: {
          Authorization: result.data.result.jwt
        }
      }
      return axios.get('/api/auth/jwt/authorize', opts)
    }).then((result) => {
      dispatch(loginSuccessful())
      dispatch(setUser(result.data.result.user))
      history.push('/')
    }).catch(err => {
      dispatch(loginFailed(err.response.data.message))
    })
  },
  clearErrors: () => {
    dispatch(clearLoginErrors())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))