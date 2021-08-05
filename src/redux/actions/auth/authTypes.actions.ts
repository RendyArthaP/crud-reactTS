export enum Auth {
  AUTH_REQUEST = "AUTH_REQUEST",
  AUTH_FAILED = "AUTH_FAILED",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGOUT = "LOGOUT"
}

export type AuthLoginType = {
  email: string,
  password: string
}

export type AuthRegisterType = {
  _id: string,
  name: string,
  email: string,
  password: string,
  alamat: string
}

export interface AuthRequest {
  type: Auth.AUTH_REQUEST
}

export interface AuthFailed {
  type: Auth.AUTH_FAILED
}

export interface RegisterSuccess {
  type: Auth.REGISTER_SUCCESS,
  payload: AuthRegisterType
}

export interface LoginSuccess {
  type: Auth.LOGIN_SUCCESS,
  payload: AuthLoginType
}

export interface Logout {
  type: Auth.LOGOUT
}

export type ActionAuthType = 
| AuthRequest
| AuthFailed
| RegisterSuccess
| LoginSuccess
| Logout