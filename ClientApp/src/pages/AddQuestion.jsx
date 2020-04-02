import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './addquestion.scss'

const AddQuestion = () => {
  const [question, setQuestion] = useState({})
  const [saveResults, setSaveResults] = useState({
    shouldRedirect: false,
    savedQuestionData: {},
  })

  const updateQuestionData = e => {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    setQuestion(prevQuestion => {
      prevQuestion[fieldName] = fieldValue
      return prevQuestion
    })
  }

  const addQuestion = async () => {
    console.log(question)
    const response = await axios.post('/api/questions', question)
    if (response.status === 201) {
      setSaveResults({
        shouldRedirect: true,
        savedQuestionData: response.data,
      })
      console.log(response.data)
    } else {
      //failure to add
    }
  }

  if (saveResults.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/questions/${saveResults.savedQuestionData.id}`,
        }}
      />
    )
  } else {
    return (
      <>
        <h1 className="add-question-header">Ask a public question</h1>
        <section className="add-question-section">
          <h2 className="add-question-subheader">Title</h2>
          <p className="add-question-p">
            Be specific and imagine you're asking a question to another person
          </p>
          <input
            className="add-question-title"
            name="QuestionTitle"
            type="text"
            placeholder="e.g. How to implement React Hooks in JavaScript"
            onChange={updateQuestionData}
          ></input>
          <h2 className="add-question-subheader">Body</h2>
          <p className="add-question-p">
            Include all the information someone would need to answer your
            question
          </p>
          <textarea
            className="add-question-body"
            name="QuestionText"
            onChange={updateQuestionData}
          ></textarea>
          <h2 className="add-question-subheader">Tags</h2>
          <input
            type="text"
            className="add-question-tags"
            name="Tags"
            onChange={updateQuestionData}
          ></input>
          <div>
            <button className="add-question" onClick={addQuestion}>
              Post Your Question
            </button>
          </div>
        </section>
      </>
    )
  }
}

export default AddQuestion
