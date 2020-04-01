import React from 'react'
import '../pages/home.scss'

const Summary = props => {
  const { question } = props

  return (
    <>
      <div className="home-question-wrapper"></div>
      <div className="vote-box">
        <p>1</p>
        <p>votes</p>
      </div>
      <div className="vote-answer">
        <p>46</p>
        <p>answer</p>
      </div>
      <div className="vote-views">
        <p>0</p>
        <p>views</p>
      </div>
      <div className="question-area">
        <div className="question-area-top">
          <div className="bounty">+50</div>
          <p className="question-summary">{question.questionText}</p>
        </div>
        <div className="question-area-bottom">
          <div className="tags">
            <div>openmp</div>
            <div>llvm</div>
            <div>llvm-clang</div>
          </div>
          <div className="contributor">
            <p>answered 10 hours ago Karthik Sriram 1</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Summary
