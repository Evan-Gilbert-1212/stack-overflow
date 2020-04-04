import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './style.scss'
import StackOverflowImg from '../../images/stackoverflow.png'
import ProfileImg from '../../images/default.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import StackExchange from '@fortawesome/fontawesome-free/svgs/brands/stack-exchange.svg'

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
            <button className="profile-button">
              <img
                className="profile-icon"
                src={ProfileImg}
                alt="profile icon"
              />
            </button>
          </div>
          {/* <button className="nav-button">
                  <FontAwesomeIcon icon={faInbox} />
                </button>
                <button className="nav-button">
                  <FontAwesomeIcon icon={faTrophy} />
                </button>
                <button className="nav-button">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </button>
                <button className="nav-button">
                  <img
                    className="se-icon"
                    src={StackExchange}
                    alt="profile icon"
                  />
                </button> */}
        </header>
      )
    }
  }
}
