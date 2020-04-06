import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './style.scss'
import StackOverflowImg from '../../images/stackoverflow.png'
import ProfileImg from '../../images/default.png'

export class NavMenu extends Component {
  static displayName = NavMenu.name

  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
      searchTerm: '',
      shouldRedirect: false,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  setSearchTerm = e => {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  setRedirect = e => {
    e.preventDefault()

    this.setState(
      {
        shouldRedirect: true,
      },
      () => {
        this.setState({
          shouldRedirect: false,
        })
      }
    )
  }

  render() {
    if (this.state.shouldRedirect) {
      return (
        <Redirect
          to={{
            pathname: `/search/${this.state.searchTerm}`,
          }}
        />
      )
    } else {
      return (
        <header>
          <div className="orange-bar"></div>
          <div className="header-items">
            <Link to="/">
              <img
                className="site-logo"
                src={StackOverflowImg}
                alt="site logo"
              />
            </Link>
            <form onSubmit={this.setRedirect}>
              <input
                className="search-input"
                type="search"
                placeholder="Search..."
                onChange={this.setSearchTerm}
              ></input>
            </form>
            {console.log(localStorage.getItem('userId'))}
            {localStorage.getItem('userId').length > 0 ? (
              <button className="profile-button">
                <img
                  className="profile-icon"
                  src={ProfileImg}
                  alt="profile icon"
                />
              </button>
            ) : (
              <div className="nav-buttons">
                <a href="/login">
                  <button className="nav-login-button">Log In</button>
                </a>
                <a href="/signup">
                  <button className="nav-signup-button">Sign Up</button>
                </a>
              </div>
            )}
          </div>
        </header>
      )
    }
  }
}
