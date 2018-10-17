import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    const { username, firstName, lastName, _id } = this.props
    return (
      <div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">ID</label>
          <div className="col-sm-9">
            {_id}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Username</label>
          <div className="col-sm-9">
            {username}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">First Name</label>
          <div className="col-sm-9">
            {firstName}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Last Name</label>
          <div className="col-sm-9">
            {lastName}
          </div>
        </div>
        <Link className="btn btn-primary active" to="/profile/update">Update</Link>
      </div>
    )
  }
}

export const mapStateToProps = ({ identity }) => ({
  ...identity.user
})


export default connect(mapStateToProps, null)(Home)