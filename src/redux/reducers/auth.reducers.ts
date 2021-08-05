import { 
  Auth, 
  ActionAuthType
} from "../actions/auth/authTypes.actions"

interface InitialStateI {
  loading: boolean,
  logged: boolean,
  error: boolean
}

const token = localStorage.token

const initialState: InitialStateI = (token !== undefined && token !== null) ? {
  loading: false,
  logged: true,
  error: false
} : {
  loading: true,
  logged: false,
  error: false
}

const handleAuth = (state = initialState, action: ActionAuthType): InitialStateI => {
  switch(action.type) {
    case Auth.AUTH_REQUEST: 
      return {
        ...state,
        loading: true
      }
    case Auth.AUTH_FAILED:
      return {
        ...state,
        error: true,
        loading: false
      }
    case Auth.REGISTER_SUCCESS:
      return {
        error: false,
        loading: false,
        logged: false
      }
    case Auth.LOGIN_SUCCESS:
      return {
        ...state,
        logged: true,
        loading: false,
        error: false
      }
    case Auth.LOGOUT:
      return {
        ...state,
        logged: false,
        loading: false,
        error: false
      }
    default:
      return state
  }
}

export default handleAuth