import React, { useState } from 'react'
import axios from 'axios'
import './addquestion.scss'

const AddQuestion = () => {
  const [question, setQuestion] = useState({})

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
      //success in adding
    } else {
      //failure to add
    }
  }

  return (
    <>
      <h1>Ask a public question</h1>
      <section>
        <h2>Title</h2>
        <p>
          Be specific and imagine you're asking a question to another person
        </p>
        <input
          className="QuestionTitle"
          name="QuestionTitle"
          type="text"
          placeholder="e.g. How to implement React Hooks in JavaScript"
          onChange={updateQuestionData}
        ></input>
        <h2>Body</h2>
        <p>
          Include all the information someone would need to answer your question
        </p>
        <textarea
          className="QuestionText"
          name="QuestionText"
          onChange={updateQuestionData}
        ></textarea>
        <h2>Tags</h2>
        <input
          type="text"
          className="Tags"
          name="Tags"
          onChange={updateQuestionData}
        ></input>
        <div>
          <button onClick={addQuestion}>Post Your Question</button>
        </div>
        <h2>User ID (TEMPORARY)</h2>
        <input
          className="UserId"
          name="UserId"
          type="text"
          onChange={updateQuestionData}
        ></input>
        <h2>Score (TEMPORARY)</h2>
        <input
          className="Score"
          name="Score"
          type="text"
          onChange={updateQuestionData}
        ></input>
      </section>
    </>
  )
}

export default AddQuestion
