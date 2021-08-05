import React, { useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h1>
        Register
      </h1>
      <form>
        <div>
          <p>Username</p>
          <input 
            value={register.username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Email</p>
          <input 
            value={register.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Password</p>
          <input 
            value={register.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <button>
          Register
        </button>
      </form>
      <Link to="/login">
        Already have account
      </Link>
    </div>
  )
}

export default Register
