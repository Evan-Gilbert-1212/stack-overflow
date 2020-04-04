import React, { useState } from 'react'
import axios from 'axios'
import './signup.scss'

const SignUp = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createNewUserAPI = async () => {
    const resp = await axios.post('/auth/signup', {
      fullName: fullName,
      email: email,
      password: password,
    })
    console.log(resp.data)
  }

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

        <button className="signup-button" onClick={createNewUserAPI}>
          Sign Up
        </button>
      </div>
      {/* </div> */}
    </div>
  )
}

export default SignUp
