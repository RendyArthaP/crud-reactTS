export enum Users {
  USERS_LOADING = "USERS_ LOADING",
  USERS_SUCCESS = "USERS_SUCCESS",
  USERS_ERROR = "USERS_ERROR",
  ADD_USERS_LOADING = "ADD_USERS_LOADING",
  ADD_USERS_SUCCESS = "ADD_USERS_SUCCESS",
  ADD_USERS_ERROR = "ADD_USERS_ERROR",
}

export type UsersType = {
  id: string,
  name: string,
  phone: string,
  jobs: string,
  gender: string,
  email: string
}

export interface UsersLoading {
  type: Users.USERS_LOADING
}

export interface UsersSuccess {
  type: Users.USERS_SUCCESS,
  payload: UsersType[]
}

export interface UsersError {
  type: Users.USERS_ERROR
}

export interface AddUsersLoading {
  type: Users.ADD_USERS_LOADING
}

export interface AddUsersSuccess {
  type: Users.ADD_USERS_SUCCESS,
  payload: UsersType
}

export interface AddUsersError {
  type: Users.ADD_USERS_ERROR
}

export type ActionsUsersType = UsersLoading | UsersSuccess | UsersError | AddUsersLoading | AddUsersSuccess | AddUsersError