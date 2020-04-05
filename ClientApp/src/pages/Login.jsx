import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './login.scss'

const Login = () => {
  // const Login = props => {
  // const returnpage = props.??????
  const [logInEmail, setLogInEmail] = useState('')
  const [logInPassword, setLogInPassword] = useState('')
  const [badPassword, setBadPassword] = useState('')
  const [successLogin, setSuccessLogin] = useState({
    loggedIN: false,
    token: '',
  })

  const loginToApi = async () => {
    const resp = await axios
      .post('/auth/login', {
        email: logInEmail,
        password: logInPassword,
      })

      .then(response => {
        console.log(response)
        if (response.status === 200) {
          setSuccessLogin({
            loggedIN: true,
            //token: response.data.token,
          })
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('email', response.data.user.email)
          localStorage.setItem('userId', response.data.user.id)
          console.log(localStorage.getItem('userId'))
        } else {
          // do something else here
        }
      })
      .catch(error => {
        console.log(error.response.data)
        setBadPassword(error.response.data)
      })
  }

  if (successLogin.loggedIN) {
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
          <p className="bad-password">
            <p>{badPassword}</p>
          </p>
        </section>
        <p className="sign-up">
          Don’t have an account? <a href={`/signup/`}>Sign Up</a>
        </p>
      </div>
    )
  }
}

export default Login
