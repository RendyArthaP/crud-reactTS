import { useState, ChangeEvent, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { RegisterAction } from '../redux/actions/auth/auth.action'
import { useDispatch } from 'react-redux'

const Register = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    alamat: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    })
  }
  
  const handleRegister = (e: FormEvent): void => {
    e.preventDefault()
    dispatch(RegisterAction(register, history))
  }

  return (
    <div>
      <h1>
        Register
      </h1>
      <form onSubmit={handleRegister}>
        <div>
          <p>name</p>
          <input 
            value={register.name}
            name="name"
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <p>Email</p>
          <input 
            value={register.email}
            name="email"
            onChange={handleChange}
            type="email"
          />
        </div>
        <div>
          <p>Password</p>
          <input 
            value={register.password}
            name="password"
            onChange={handleChange}
            type="password"
          />
        </div>
        <div>
          <p>Alamat</p>
          <input 
            value={register.alamat}
            name="alamat"
            onChange={handleChange}
            type="text"
          />
        </div>
        <button type="submit">
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
