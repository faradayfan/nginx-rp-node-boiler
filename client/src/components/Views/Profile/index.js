import React, { Component } from 'react'
import { connect } from 'react-redux'
class Home extends Component {
  render() {
    const { saveProfile, history } = this.props


    return (
      <div>
        <form onSubmit={() => saveProfile(history)}>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Username</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="username" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">First Name</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="firstname" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Last Name</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="lastname" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Password</label>
            <div className="col-sm-9">
              <input type="password" className="form-control" id="password" />
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = ({ identity }) => ({
  user: identity.user
})

export const mapDispatchToProps = dispatch => ({
  saveProfile: (history) => {
    history.push('/profile')
  }
})



export default connect(mapStateToProps, null)(Home)