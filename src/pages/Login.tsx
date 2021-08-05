import React, { useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h1>
        Login
      </h1>
      <form>
        <div>
          <p>Email</p>
          <input 
            value={login.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Password</p>
          <input 
            value={login.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <button>
          Login
        </button>
      </form>
      <Link to="/register">
        Register Here
      </Link>
    </div>
  )
}

export default Login
