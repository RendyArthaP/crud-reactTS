import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LoginAction } from '../redux/actions/auth/auth.action'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [login, setLogin] = useState({
    name: "",
    password: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e: FormEvent): void => {
    e.preventDefault()
    dispatch(LoginAction(login, history))
  }

  return (
    <div>
      <h1>
        Login
      </h1>
      <form onSubmit={handleLogin}>
        <div>
          <p>Username</p>
          <input 
            value={login.name}
            name="name"
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <p>Password</p>
          <input 
            value={login.password}
            name="password"
            onChange={handleChange}
            type="password"
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
