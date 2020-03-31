import React, { useState } from 'react'
import './search.scss'

const SearchPage = () => {
  //set vars for use of state
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="search-head">
        <h3>Search</h3>
        <div className="search-head-right">
          <a href="/AdvancedSearchTips">Advanced Search Tips</a>
          <button className="search-ask-button">Ask Question</button>
        </div>
      </div>
      <div className="search-input">
        <input
          name="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className="search-search-button" value={searchTerm}>
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchPage
