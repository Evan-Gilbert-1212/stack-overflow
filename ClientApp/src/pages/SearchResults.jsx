import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './search.scss'
import { Link } from 'react-router-dom'
import Summary from '../components/Summary'

const SearchResultsPage = props => {
  //set vars for use of state
  const searchTerm = props.match.params.searchTerm
  const [searchResults, setSearchResults] = useState([])
  const [loaded, setLoaded] = useState(false)

  //poll api for results based on user input
  const getQuestions = async () => {
    const resp = await axios.get(
      `/api/questions/search?searchTerm=${searchTerm}`
    )
    setSearchResults(resp.data)
    setLoaded(true)
  }

  //poll api on page load
  useEffect(() => {
    getQuestions()
  }, [searchTerm])

  //render if searchResults exist
  if (searchResults.length === 0) {
    return <div>Results Empty...</div>
  } else if (!loaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="search">
        <div className="search-head">
          <h3>Questions tagged [{searchTerm}]</h3>
          <div className="search-head-right">
            <Link to="/ask">
              <button className="search-ask-button">Ask Question</button>
            </Link>
          </div>
        </div>
        <div className="results">{searchResults.length} Result(s)</div>
        <hr />
        {searchResults.map(question => {
          return (
            <a href={`/questions/${question.id}`}>
              <Summary question={question} />
            </a>
          )
        })}
      </div>
    )
  }
}

export default SearchResultsPage
