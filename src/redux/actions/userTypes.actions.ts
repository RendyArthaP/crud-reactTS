export enum Users {
  USERS_LOADING = "USERS_ LOADING",
  USERS_SUCCESS = "USERS_SUCCESS",
  USERS_ERROR = "USERS_ERROR"
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

export type ActionsUsersType = UsersLoading | UsersSuccess | UsersError