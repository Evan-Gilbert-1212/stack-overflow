import React, { useState, useEffect } from 'react'
import './QuestionDetails.scss'
import axios from 'axios'
import Answer from '../components/Answer'

const QuestionDetails = props => {
  const questionId = props.match.params.questionId
  const [question, setQuestion] = useState({
    questionData: {},
    isLoaded: false,
  })
  const [answerText, setAnswerText] = useState('')

  const getQuestion = async () => {
    const response = await axios.get(`/api/questions/${questionId}`)
    setQuestion({
      questionData: response.data,
      isLoaded: true,
    })
  }

  const updateAnswerText = async e => {
    setAnswerText(e.target.value)
  }

  const postAnswer = async () => {
    const response = await axios.post('/api/answers', {
      answertext: answerText,
      questionid: parseInt(questionId),
    })
    getQuestion()
    setAnswerText('')
  }

  useEffect(() => {
    getQuestion()
  }, [])

  if (!question.isLoaded) {
    return <h2>Loading...</h2>
  } else {
    return (
      <div>
        <h1 className="question-detail-header">
          {question.questionData.questionTitle}
        </h1>
        <div className="question-detail-seperator"></div>
        <p className="question-detail-body">
          {question.questionData.questionText}
        </p>
        <div className="question-detail-tags">
          {question.questionData.tags
            .replace(/ /g, '')
            .split(',')
            .map(tag => {
              return <div>{tag}</div>
            })}
        </div>
        <div>
          <h4 className="question-answer-header">Answers</h4>
          {question.questionData.answers.length > 0 ? (
            question.questionData.answers.map(answer => {
              return <Answer answerText={answer.answerText} />
            })
          ) : (
            <p>No Answers Yet</p>
          )}
        </div>
        <h3 className="answer-heading">Your Answer</h3>
        <textarea
          className="question-answer-entry"
          value={answerText}
          onChange={updateAnswerText}
        ></textarea>
        <div>
          <button className="add-answer" onClick={postAnswer}>
            Post Your Answer
          </button>
        </div>
      </div>
    )
  }
}

export default QuestionDetails
