import React from 'react'
import { connect } from 'react-redux'

class Header extends React.Component {

  render() {
    const { auth } = this.props
    return (
      <div className="header">
        <a href="/">
          <div className="header-items">
            Home
          </div>
        </a>
        <a href="/tickets">
          <div className="header-items">
            Tickets
          </div>
        </a>
        <a href="/faq">
          <div className="header-items">
            FAQ
          </div>
        </a>
        <a href="/about">
          <div className="header-items">
            About
          </div>
        </a>
        {auth.isAuthenticated ? 
        ( <div className="header-items">
            <h3>{auth.user.name}</h3>
            <img src={auth.user.picture} alt="Profile pic"/>
          </div>
        ) : 
        (
          <a href="/login">
            <div className="header-items">
              Login {auth.errorMessage}
            </div>
          </a>
        )
      }

      </div>
    )
  }
}
const mapStateToProps = ({auth}) => {
    return {
      auth
    }
  }

    export default connect(mapStateToProps)(Header)