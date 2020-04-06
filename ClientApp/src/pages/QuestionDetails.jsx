import React, { useState, useEffect } from 'react'
import './QuestionDetails.scss'
import axios from 'axios'
import Answer from '../components/Answer'
// import { upVote } from '../images/up-grey.png'
// import { downVote } from '../images/down-grey.png'

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
  let buttonVal = 0
  //set var to use state for the result returned from the API
  const [putResult, setPutResult] = useState()

  //declare variable for the results of possible bad responses
  let errorMessage = ''
  //function to upvote the score of a question
  const upvoteToAPI = async () => {
    const respPut = await axios.put(`/api/questions/upvote/${questionId}`)
    console.log(respPut)
    if (respPut.status === 201) {
      setPutResult(respPut.data)
    } else {
      errorMessage = respPut.data
    }
    getQuestion()
  }

  //function to downvote the score of a question
  const downvoteToAPI = async () => {
    const respPut = await axios.put(`/api/questions/downvote/${questionId}`)
    console.log(respPut)
    if (respPut.status === 201) {
      setPutResult(respPut.data)
    } else {
      errorMessage = respPut.data
    }
    getQuestion()
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
  } else if (!question.questionData) {
    return <h2>Trying...</h2>
  } else {
    return (
      <div>
        <article className="question-and-scoring">
          <section className="question-scoring">
            <div className="upvote-div">
              <button className="vote-buttons" onClick={upvoteToAPI}>
                +1
              </button>
            </div>
            <div className="question-score">
              {question.questionData.questionScore}
            </div>
            <div className="downvote-div">
              <button className="vote-buttons" onClick={downvoteToAPI}>
                -1
              </button>
            </div>
          </section>
          <section className="question-sans-scoring">
            <h1 className="question-detail-header">
              {question.questionData.questionTitle}
            </h1>
            <div className="question-detail-seperator"></div>
            <p className="question-detail-body">
              {question.questionData.questionText}
            </p>
            <div className="question-detail-tags">
              {question.questionData.tags
                .replace(' ', '')
                .split(',')
                .map(tag => {
                  return <div>{tag}</div>
                })}
            </div>
          </section>
        </article>
        <div>
          {localStorage.getItem('token') === '' ? (
            <div>You must be logged in to post an answer.</div>
          ) : (
            <>
              <div>
                <h4 className="question-answer-header">Answers</h4>
                {question.questionData.answers.length > 0 ? (
                  question.questionData.answers.map(answer => {
                    return (
                      <Answer
                        key={answer.id}
                        id={answer.id}
                        answerScore={answer.answerScore}
                        answerText={answer.answerText}
                        answerPostedOn={answer.answerPostedOn}
                      />
                    )
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
            </>
          )}
        </div>
      </div>
    )
  }
}

export default QuestionDetails
