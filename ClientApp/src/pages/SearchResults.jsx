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
<<<<<<< HEAD
            <a href={`/questions/${result.id}`}>
              <div className="result-question-summary">
                <div className="result-stats-container">
                  <div className="result-stats">
                    <div className="result-votes">
                      <div className="result-vote-box">
                        <strong>{result.questionScore || 0}</strong>
                        <div className="result-vote-box-text">votes</div>
                      </div>
                    </div>
                    <div className="result-answers">
                      <strong>{result.questionAnswers || 0}</strong>
                      <div className="result-answers-text">answers</div>
                    </div>
                  </div>
                  <div className="result-views">0 views</div>
                </div>
                <div className="result-summary">
                  <div className="result-summary-top">
                    <div className="result-question-title">
                      {result.questionTitle}
                    </div>
                    <div className="result-question-text">
                      {result.questionText}
                    </div>
                  </div>
                  <div className="result-summary-bottom">
                    <div className="result-tags">
                      {result.tags
                        .replace(' ', '')
                        .split(',')
                        .map(tag => {
                          return <div className="result-tag">{tag}</div>
                        })}
                    </div>
                    <div className="result-user-and-created">
                      <div className="result-created">
                        asked {result.questionDate}
                      </div>
                      <div className="result-user">userName</div>
                    </div>
                  </div>
                </div>
              </div>
=======
            <a href={`/questions/${question.id}`}>
              <Summary question={question} />
>>>>>>> master
            </a>
          )
        })}
      </div>
    )
  }
}

export default SearchResultsPage
