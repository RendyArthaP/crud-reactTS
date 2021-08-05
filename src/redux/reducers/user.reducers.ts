import {
  Users,
  UsersType,
  ActionsUsersType
} from "../actions/user/userTypes.actions"

interface InitialStateI {
  loading: boolean,
  users: UsersType[]
}

const initialState: InitialStateI = {
  loading: false,
  users: [],
}

const handleUsers = (state = initialState, action: ActionsUsersType):InitialStateI => {
  switch(action.type) {
    case Users.USERS_LOADING: 
      return {
        ...state,
        loading: true
      }
    case Users.USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload
      }
    case Users.USERS_ERROR:
      return {
        ...state,
        loading: true
      }
    case Users.ADD_USERS_LOADING: 
      return {
        ...state,
        loading: true
      }
    case Users.ADD_USERS_SUCCESS:
      return {
        loading: false,
        users: [
          ...state.users,
          action.payload
        ]
      }
    case Users.ADD_USERS_ERROR:
      return {
        ...state,
        loading: true
      }
    case Users.DELETE_USERS_LOADING: 
      return {
        ...state,
        loading: true
      }
    case Users.DELETE_USERS_SUCCESS:
      let deleteUsers = state.users.filter((user) => user.id !== action.payload.id)

      return {
        ...state,
        users: [...deleteUsers]
      }
    case Users.UPDATE_USERS_LOADING:
      return {
        ...state,
        loading: true
      }
    case Users.UPDATE_USERS_ERROR:
      return {
        ...state,
        loading: true
      }
    default: 
      return state
  }
}

export default handleUsers