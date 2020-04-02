import React, { useState } from 'react'
import './search.scss'

const SearchPage = () => {
  //set vars for use of state
  const [searchTerm, setSearchTerm] = useState('')
  const [redirect, setRedirect] = useState()

  const getSearchTerm = e => {
    console.log(e.target.value)
    setSearchTerm(e.target.value)
  }

  const getRedirect = e => {
    e.preventDefault()
    setRedirect(true)
  }

  return (
    <div className="search-parent">
      <div className="search-head">
        <h3>Search</h3>
        <div className="search-head-right">
          <a href="/AdvancedSearchTips">Advanced Search Tips</a>
          <button className="search-ask-button">
            <a href="">Ask Question</a>
          </button>
        </div>
      </div>
      <div className="search-page-input">
        <form onSubmit={getRedirect}>
          <input className="search-field" onChange={setSearchTerm} />
        </form>
        <button
          className="search-search-button"
          searchTerm={searchTerm}
          onClick={getSearchTerm}
        >
          <a href={`/search/${searchTerm}`}>Search</a>
        </button>
      </div>
    </div>
  )
}

export default SearchPage
