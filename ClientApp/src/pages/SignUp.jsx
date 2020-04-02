import React from 'react'

const SignUp = () => {
  return (
    <div>
      <section className="sign-up">
        <h1>Let's create a new account.</h1>
        <section>
          <label htmlFor="">Full Name</label>
          <input type="text" />
        </section>
        <section>
          <label htmlFor="">Email</label>
          <input type="text" />
        </section>
        <section>
          <label htmlFor="">Full Name</label>
          <input type="password" />
        </section>
        <button>Create Account</button>
      </section>
    </div>
  )
}

export default SignUp
