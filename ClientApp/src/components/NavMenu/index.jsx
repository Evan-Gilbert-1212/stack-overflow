import React, { Component } from 'react'
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap'
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
            pathname: `/search/?searchTerm=${this.state.searchTerm}`,
          }}
        />
      )
    } else {
      return (
        <header>
          <Navbar
            className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
            light
          >
            <Container>
              <NavbarBrand tag={Link} to="/">
                <img src={StackOverflowImg} alt="site logo" />
              </NavbarBrand>
              <form onSubmit={this.setRedirect}>
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search..."
                  onChange={this.setSearchTerm}
                ></input>
              </form>
              <div>
                <button className="nav-button">
                  <img
                    className="profile-icon"
                    src={ProfileImg}
                    alt="profile icon"
                  />
                  <label className="profile-reputation">1</label>
                </button>
                <button className="nav-button">
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
                </button>
              </div>
            </Container>
          </Navbar>
        </header>
      )
    }
  }
}
