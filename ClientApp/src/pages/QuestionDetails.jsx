import React, { useState, useEffect } from 'react'
import './QuestionDetails.scss'
import axios from 'axios'

const QuestionDetails = props => {
  const questionId = props.match.params.questionId
  const [question, setQuestion] = useState({})
  const [questionTags, setQuestionTags] = useState([])

  const getQuestion = async () => {
    const response = await axios.get(`/api/questions/${questionId}`)
    setQuestion(response.data)
    setQuestionTags(response.data.tags.replace(' ', '').split(','))
  }

  useEffect(() => {
    getQuestion()
  }, [])

  return (
    <div>
      <h1 className="question-detail-header">{question.questionTitle}</h1>
      <div className="question-detail-seperator"></div>
      <p className="question-detail-body">{question.questionText}</p>
      <div className="question-detail-tags">
        {questionTags.map(tag => {
          return <div>{tag}</div>
        })}
      </div>
      {/* <p>{question.questionScore}</p>
      <p>{question.questionPostedOn}</p> */}
      <h3 className="answer-heading">Your Answer</h3>
      <textarea className="question-answer-entry"></textarea>
      <div>
        <button className="add-answer">Post Your Answer</button>
      </div>
    </div>
  )
}

export default QuestionDetails
