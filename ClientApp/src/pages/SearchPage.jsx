import React, { Component } from 'react'
import './search.scss'
import { Link, Redirect } from 'react-router-dom'

export default class SearchPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      shouldRedirect: false,
    }
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
        <div className="search-parent">
          <div className="search-head">
            <h3>Search</h3>
            <div className="search-head-right">
              <a href="/AdvancedSearchTips">Advanced Search Tips</a>
              <Link to="/ask">
                <button className="search-ask-button">Ask Questions</button>
              </Link>
            </div>
          </div>
          <div className="search-page-input">
            <form onSubmit={this.setRedirect}>
              <input
                className="search-field"
                type="search"
                placeholder="Search..."
                onChange={this.setSearchTerm}
                searchTerm={this.searchTerm}
              ></input>{' '}
            </form>
            <button className="search-search-button" onClick={this.setRedirect}>
              <a href={`/search/${this.searchTerm}`}>Search</a>
            </button>
          </div>
        </div>
      )
    }
  }
}
