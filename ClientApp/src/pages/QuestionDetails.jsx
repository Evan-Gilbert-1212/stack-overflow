import React, { useState, useEffect } from 'react'
import './QuestionDetails.scss'
import axios from 'axios'

const QuestionDetails = props => {
  const questionId = props.match.params.questionId
  const [question, setQuestion] = useState({})

  const getQuestion = async () => {
    const response = await axios.get(`/api/questions/${questionId}`)
    console.log(response.data)
    setQuestion(response.data)
  }

  useEffect(() => {
    getQuestion()
  }, [])

  return (
    <div>
      <h1>This is the Question Details Page</h1>
      <h2>{question.questionTitle}</h2>
      <h2>{question.questionText}</h2>
      <h2>{question.tags}</h2>
      <h2>{question.questionScore}</h2>
      <h2>{question.questionPostedOn}</h2>
    </div>
  )
}

export default QuestionDetails
