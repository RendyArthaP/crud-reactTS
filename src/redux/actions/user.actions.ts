import axios from "axios";
import { Dispatch } from "redux";
import {
  Users,
  ActionsUsersType
} from "./userTypes.actions"

export const getUsers = () => {
  return function(dispatch: Dispatch<ActionsUsersType>) {
    dispatch({
      type: Users.USERS_LOADING
    })
    axios
      .get(`${process.env.REACT_APP_USERS}`)
      .then((result) => dispatch({
        type: Users.USERS_SUCCESS,
        payload: result.data
      }))
      .catch((error) => dispatch({
        type: Users.USERS_ERROR,
        payload: console.log(error)
      }))
  }
}

export const addUsersAction = (data: {}) => {
  return function(dispatch: Dispatch<ActionsUsersType>) {
    dispatch({
      type: Users.ADD_USERS_LOADING
    })
    axios
      .post("https://6106a5c21f348700174379d5.mockapi.io/users", data)
      .then((result) => dispatch({
        type: Users.ADD_USERS_SUCCESS,
        payload: result.data
      }))
      .catch((error) => dispatch({
        type: Users.ADD_USERS_ERROR,
        payload: console.log(error)
      }))
  }
}