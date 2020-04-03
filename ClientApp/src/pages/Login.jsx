import React, { useState } from 'react'
import axios from 'axios'

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
    <div>
      <section className="login">
        <h1>Login</h1>
        <section>
          <label htmlFor="">Email</label>
          <input
            type="text"
            value={logInEmail}
            onChange={e => setLogInEmail(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={logInPassword}
            onChange={e => setLogInPassword(e.target.value)}
          />
        </section>
        <button onClick={loginToApi}>Login</button>
      </section>
    </div>
  )
}

export default Login
