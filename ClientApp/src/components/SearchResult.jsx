import React from 'react'

const SearchResult = props => {
  // const [
  //   questionScore,
  //   questionAnswers,
  //   questionTitle,
  //   questionText,
  //   questionTags,
  //   questionDate,
  // ] = props.match.params.id
  return (
    <div className="result-question-summary">
      <div className="result-stats-container">
        <div className="result-stats">
          <div className="result-votes">
            <div className="result-vote-box">
              {/* <strong>{questionScore}</strong>votes */}
              <strong>4</strong>
              <div className="result-vote-box-text">votes</div>
            </div>
          </div>
          <div className="result-answers">
            {/* <strong>{questionAnswers}</strong>answers */}
            <strong>1</strong>
            <div className="result-answers-text">answers</div>
          </div>
        </div>
        <div className="result-views">0 views</div>
      </div>
      <div className="result-summary">
        <div className="result-summary-top">
          {/* <div className="result-question-title">{questionTitle}</div> */}
          <div className="result-question-title">question Title</div>
          {/* <div className="result-question-text">{questionText}</div> */}
          <div className="result-question-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            distinctio laboriosam omnis quam iste voluptatem.
          </div>
        </div>
        <div className="result-summary-bottom">
          {/* <div className="result-tags">{questionTags}</div> */}
          <div className="result-tags">questionTags</div>
          <div className="result-user-and-created">
            {/* <div className="result-created">{questionDate}</div> */}
            <div className="result-created">asked questionDate</div>
            <div className="result-user">userName</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult
