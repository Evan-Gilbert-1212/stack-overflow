import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './search.scss'

const SearchResultsPage = () => {
  //set vars for use of state
  const searchTerm = props.match.params.searchTerm
  const [searchResults, setSearchResults] = useState()

  //poll api for results based on user input
  const getQuestions = async () => {
    const resp = await axios.get(
      `/api/search/questions?searchTerm=${searchTerm}`
    )
    console.log(searchTerm)
    console.log(resp)
    setSearchResults(resp.data)
  }

  //poll api on page load
  useEffect(() => {
    getQuestions()
  })

  return (
    <div className="search">
      <div className="search-head">
        <h3>Questions tagged [{searchTerm}]</h3>
        <div className="search-head-right">
          <button className="search-ask-button">Ask Question</button>
        </div>
      </div>
      <div className="results">Result</div>
    </div>
  )
}

export default SearchResultsPage
