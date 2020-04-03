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
        {/* <div className="container"> */}

        <label htmlFor="">Display Name</label>
        <input
          type="text"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />

        <label htmlFor="">Email</label>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="create-account-button" onClick={createNewUserAPI}>
          Create Account
        </button>
      </div>
      {/* </div> */}
    </div>
  )
}

export default SignUp
