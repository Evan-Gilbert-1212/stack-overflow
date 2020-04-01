import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './search.scss'
import SearchResult from '../components/SearchResult'

const SearchResultsPage = props => {
  //set vars for use of state
  const searchTerm = props.match.params.searchTerm
  const [searchResults, setSearchResults] = useState()

  //poll api for results based on user input
  const getQuestions = async () => {
    const resp = await axios.get(`/api/questions/search/${searchTerm}`)
    console.log(resp)
    setSearchResults(resp.data)
  }

  //poll api on page load
  useEffect(() => {
    getQuestions()
    console.log(props)
    console.log(searchTerm)
  }, [])

  //render if searchResults exist
  if (!searchResults) {
    return <div>Results Empty...</div>
  } else {
    return (
      <div className="search">
        <div className="search-head">
          <h3>Questions tagged [{searchTerm}]</h3>
          <div className="search-head-right">
            <button className="search-ask-button">Ask Question</button>
          </div>
        </div>
        <div className="results">Result</div>
        {searchResults.map(result => {
          return <SearchResult key={result.id} />
        })}
      </div>
    )
  }
}

export default SearchResultsPage
