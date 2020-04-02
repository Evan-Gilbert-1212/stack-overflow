import React, { useState } from 'react'
import axios from 'axios'

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
    <div>
      <section className="sign-up">
        <h1>Let's create a new account.</h1>
        <section>
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="">Email</label>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </section>
        <button onClick={createNewUserAPI}>Create Account</button>
      </section>
    </div>
  )
}

export default SignUp
