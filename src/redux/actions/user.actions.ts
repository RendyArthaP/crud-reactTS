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