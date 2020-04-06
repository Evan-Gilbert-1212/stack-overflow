import React, { useState, use } from 'react'
import axios from 'axios'
import '../pages/QuestionDetails.scss'

const Answer = props => {
  const answer = props

  //set useState vars
  const [putResult, setPutResult] = useState()

  //function to upvote the score of an answer
  const upvoteAnswerToAPI = async () => {
    const respPut = await axios.put(`/api/answers/upvote/${answer.id}`)
    console.log(respPut)
    if (respPut.status === 201) {
      setPutResult(respPut.data)
    } else {
      console.log(respPut.data)
    }
    window.location.reload(false)
  }

  //function to downvote the score of an answer
  const downvoteAnswerToAPI = async () => {
    const respPut = await axios.put(`/api/answers/downvote/${answer.id}`)
    console.log(respPut)
    if (respPut.status === 201) {
      setPutResult(respPut.data)
    } else {
      console.log(respPut.data)
    }
    window.location.reload(false)
  }

  return (
    <div className="answer-section">
      <article className="answer-and-scoring">
        <section className="answer-scoring">
          <div className="answer-upvote-div">
            <button className="vote-buttons" onClick={upvoteAnswerToAPI}>
              +1
            </button>
          </div>
          <div className="answer-score">{answer.answerScore}</div>
          <div className="answer-downvote-div">
            <button className="vote-buttons" onClick={downvoteAnswerToAPI}>
              -1
            </button>
          </div>
        </section>
        <section className="answer-sans-scoring">
          <p>{props.answerText}</p>
          <p>
            Answer Posted: {answer.answerPostedOn} ID: {answer.id}
          </p>
        </section>
      </article>
    </div>
  )
}

export default Answer
