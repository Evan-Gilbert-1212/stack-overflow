import React from 'react'

const QuestionDetails = props => {
  const questionId = props.match.params.questionId
  return (
    <div>
      <h1>This is the Question Details Page</h1>
      <h2>{questionId}</h2>
    </div>
  )
}

export default QuestionDetails
