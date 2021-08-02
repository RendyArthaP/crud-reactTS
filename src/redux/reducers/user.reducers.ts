import {
  Users,
  UsersType,
  ActionsUsersType
} from "../actions/userTypes.actions"

interface InitialStateI {
  loading: boolean,
  users: UsersType[]
}

const initialState: InitialStateI = {
  loading: false,
  users: []
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
        users: [
          ...state.users,
          ...action.payload
        ]
      }
    case Users.USERS_ERROR:
      return {
        ...state,
        loading: true
      }
    default: 
      return state
  }
}

export default handleUsers