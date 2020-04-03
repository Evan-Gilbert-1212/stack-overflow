import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Summary from '../components/Summary'
import './home.scss'
import axios from 'axios'

export function Home() {
  const [question, setQuestion] = useState()

  const getAllQuestions = async () => {
    const resp = await axios.get('/api/Questions')
    // setQuestion(resp.data, () => {
    //   console.log(question)
    // })
    setQuestion(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    console.log('inside')
    getAllQuestions()
  }, [])

  if (!question) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <div className="home-page">
          <div className="home-top-left">
            <h2 className="home-top-h1">Top Questions</h2>
          </div>
          <div className="home-top-right">
            <Link to="/ask">
              <button className="home-ask-questions">Ask Questions</button>
            </Link>
          </div>
        </div>
        <div className="home-sort-buttons">
          <button>Interesting</button>
          <button>Bountied</button>
          <button>Hot</button>
          <button>Week</button>
          <button>Month</button>
        </div>
        <hr />
        {/* <div className="home-question-wrapper"> */}
        {/* <ul className="summary-list"> */}
        {question.map(question => {
          return (
            <a href={`/questions/${question.id}`}>
              <Summary question={question} />
            </a>
          )
        })}
        {/* </div> */}
      </>
    )
  }
}
