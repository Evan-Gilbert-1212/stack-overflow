import React from 'react'
import '../pages/home.scss'

const Summary = props => {
  const { question } = props

  return (
    <>
      <div className="home-question-wrapper">
        <div className="vote-box">
          <p>{question.questionScore}</p>
          <p>votes</p>
        </div>
        <div className="vote-answer">
          <p>{question.answers.length}</p>
          <p>answers</p>
        </div>
        <div className="vote-views">
          <p>0</p>
          <p>views</p>
        </div>
        <div className="question-area">
          <div className="question-area-top">
            <p className="question-summary">{question.questionText}</p>
          </div>
          <div className="question-area-bottom">
            <div className="question-detail-tags">
              {question.tags != null ? (
                question.tags
                  .replace(/ /g, '')
                  .split(',')
                  .map(tag => {
                    return <div>{tag}</div>
                  })
              ) : (
                <></>
              )}
            </div>
            <div className="contributor">
              <p>asked/modified/answered 34 secs ago D. Tulloch</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Summary
