import React from 'react'

const SearchResult = props => {
  const [
    questionScore,
    questionAnswers,
    questionTitle,
    questionText,
    questionTags,
    questionDate,
  ] = props.match.params.id
  return (
    <div className="result-question-summary">
      <div className="result-stats-container">
        <div className="result-stats">
          <div className="result-votes">
            <div className="result-vote-box">
              <strong>{questionScore}</strong>votes
            </div>
          </div>
          <div className="result-answers">
            <strong>{questionAnswers}</strong>answers
          </div>
        </div>
        <div className="result-views">0 views</div>
      </div>
      <div className="result-summary">
        <div className="result-question-title">{questionTitle}</div>
        <div className="result-question-text">{questionText}</div>
        <div className="result-tags">{questionTags}</div>
        <div className="result-created">{questionDate}</div>
      </div>
    </div>
  )
}

export default SearchResult
