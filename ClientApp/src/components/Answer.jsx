import React, { useState } from 'react'
import axios from 'axios'
import QuestionDetails from '../pages/QuestionDetails'
import '../pages/QuestionDetails.scss'

const Answer = props => {
  const answer = props
  const id = answer.answerId

  //set useState vars
  const [putResult, setPutResult] = useState()

  //function to upvote the score of an answer
  const upvoteAnswerToAPI = async () => {
    const respPut = await axios.put(`/api/answers/upvote/${id}`)
    console.log(respPut)
    if (respPut.status === 201) {
      setPutResult(respPut.data)
    } else {
      console.log(respPut.data)
    }
    QuestionDetails.getQuestion()
  }

  //function to downvote the score of an answer
  const downvoteAnswerToAPI = async () => {
    const respPut = await axios.put(`/api/answers/downvote/${id}`)
    console.log(respPut)
    if (respPut.status === 201) {
      setPutResult(respPut.data)
    } else {
      console.log(respPut.data)
    }
    QuestionDetails.getQuestion()
  }
  return (
    <div className="answer-section">
      <article className="answer-and-scoring">
        <section className="answer-scoring">
          <div className="answer-upvote-div">
            <button onClick={upvoteAnswerToAPI}>Upvote</button>
          </div>
          <div className="answer-score">{answer.answerScore}</div>
          <div className="answer-downvote-div">
            <button onClick={downvoteAnswerToAPI}>Downvote</button>
          </div>
        </section>
        <section className="answer-sans-scoring">
          <p>{props.answerText}</p>
          <p>Answer Posted: {answer.answerPostedOn}</p>
        </section>
      </article>
    </div>
  )
}

export default Answer
