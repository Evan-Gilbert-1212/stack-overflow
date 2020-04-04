import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './signup.scss'

const SignUp = () => {
  // const returnpage = props.??????
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [badMessage, setBadMessage] = useState('')
  const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
    shouldRedirect: false,
  })

  const createNewUserAPI = async () => {
    const response = await axios
      .post('/auth/signup', {
        fullName: fullName,
        email: email,
        password: password,
      })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          setWasSuccessfullyCreated({
            shouldRedirect: true,
          })
        } else {
          // do something else here
        }
      })
      .catch(error => {
        console.log(error.response.data)
        setBadMessage(error.response.data)
      })
  }

  if (wasSuccessfullyCreated.shouldRedirect) {
    return (
      <Redirect
        to={{
          // pathname: `/{returnpage}`,
          pathname: `/`,
        }}
      />
    )
  } else {
    return (
      <div className="signup-page">
        <div className="middle-pane">
          <section className="signup-display-section">
            <label className="signup-display-label" htmlFor="">
              Display Name
            </label>
            <input
              className="signup-display-input"
              type="text"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
          </section>
          <section className="signup-email-section">
            <label className="signup-email-label" htmlFor="">
              Email
            </label>
            <input
              className="signup-email-input"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </section>
          <section className="signup-password-section">
            <label className="signup-password-label" htmlFor="">
              Password
            </label>
            <input
              className="signup-password-input"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </section>
          <p>{badMessage}</p>
          <button className="signup-button" onClick={createNewUserAPI}>
            Sign Up
          </button>
        </div>
        {/* </div> */}
      </div>
    )
  }
}

export default SignUp
