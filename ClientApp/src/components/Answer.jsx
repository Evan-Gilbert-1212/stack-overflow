import React from 'react'
import '../pages/QuestionDetails.scss'

const Answer = props => {
  return (
    <div className="answer-section">
      <p>{props.answerText}</p>
    </div>
  )
}

export default Answer
