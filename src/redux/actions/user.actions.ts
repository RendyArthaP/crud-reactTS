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
      .post(`${process.env.REACT_APP_USERS}`, data)
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

export const deleteUserAction = (id: string) => {
  return function(dispatch: Dispatch<ActionsUsersType>) {
    dispatch({
      type: Users.DELETE_USERS_LOADING
    })
    axios
      .delete(`${process.env.REACT_APP_USERS}/${id}`)
      .then((result) => dispatch({
        type: Users.DELETE_USERS_SUCCESS,
        payload: result.data
      }))
      .catch((error) => dispatch({
        type: Users.DELETE_USERS_ERROR,
        payload: console.log(error)
      }))
  }
}

export const updateUserAction = (data: {} | any) => {
  return function(dispatch: Dispatch<ActionsUsersType>) {
    dispatch({
      type: Users.UPDATE_USERS_LOADING
    })
    axios
      .put(`${process.env.REACT_APP_USERS}/${data.id}`, data)
      //@ts-ignore
      .then((result) => dispatch(getUsers()))
      .catch((error) => dispatch({
        type: Users.UPDATE_USERS_ERROR,
        payload: console.log(error)
      }))
  }
}