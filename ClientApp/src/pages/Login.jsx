import React, { useState } from 'react'
import axios from 'axios'
import './login.scss'

const Login = () => {
  const [logInEmail, setLogInEmail] = useState('')
  const [logInPassword, setLogInPassword] = useState('')

  const loginToApi = async () => {
    const resp = await axios.post('/auth/login', {
      email: logInEmail,
      password: logInPassword,
    })
    console.log(resp.data)
  }

  return (
    <div className="page-frame">
      <section className="login">
        <section className="login-email-section">
          <label className="login-email-label" htmlFor="">
            Email
          </label>
          <input
            className="login-email-input"
            type="text"
            value={logInEmail}
            onChange={e => setLogInEmail(e.target.value)}
          />
        </section>
        <section className="login-password-section">
          <label className="login-password-label" htmlFor="">
            Password
          </label>
          <input
            className="login-password-input"
            type="password"
            value={logInPassword}
            onChange={e => setLogInPassword(e.target.value)}
          />
        </section>
        <button className="login-button" onClick={loginToApi}>
          Login
        </button>
      </section>
      <p className="sign-up">
        Don’t have an account? <a href={`/signup/`}>Sign Up</a>
      </p>
    </div>
  )
}

export default Login
