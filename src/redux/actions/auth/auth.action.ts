import axios from "axios";
import { Dispatch } from "redux";
import { Auth, ActionAuthType } from "./authTypes.actions";

export const LoginAction = (data: {}, history: any) => {
  return function(dispatch: Dispatch<ActionAuthType>) {
    dispatch({
      type: Auth.AUTH_REQUEST
    })
    axios
      .post(`${process.env.REACT_APP_LOGIN}`, data)
      .then((result) => {
        if(result.data.token !== undefined) {
          localStorage.token = result.data.token
          localStorage.payload = JSON.stringify(result.data.data)
          dispatch({
            type: Auth.LOGIN_SUCCESS,
            payload: result.data.token
          })
          history.push('/')
        } else {
          dispatch({
            type: Auth.AUTH_FAILED
          })
          alert('Email atau password anda tidak terdaftar')
        }
      })
      .catch((error) => dispatch({
        type: Auth.AUTH_FAILED,
        payload: console.log(error)
      }))
  }
}

export const RegisterAction = (data: {name: string | any}, history: any) => {
  return function(dispatch: Dispatch<ActionAuthType>) {
    dispatch({
      type: Auth.AUTH_REQUEST
    })
    axios
      .get(`${process.env.REACT_APP_FIND_USERS}/${data.name}`)
      .then((result) => {
        if(result.data.length > 0) {
          alert("Username or email already taken")
          dispatch({
            type: Auth.AUTH_FAILED
          })
        } else {
          axios
            .post(`${process.env.REACT_APP_REGISTER}`, data)
            .then((result) => {
              dispatch({
                type: Auth.REGISTER_SUCCESS,
                payload: result.data
              })
              history.push('/login')
            })
            .catch((error) => {
              dispatch({
                type: Auth.AUTH_FAILED,
                payload: console.log(error)
              })
            })
        }
      })
      .catch((error) => {
        dispatch({
          type: Auth.AUTH_FAILED,
          payload: console.log(error)
        })
      })
  }
}

