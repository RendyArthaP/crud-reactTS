import { UsersType } from "../redux/actions/userTypes.actions";

interface Props {
  data: UsersType
}

const UserList = ({ data }: Props) => {
  return (
    <div>
      <div>
        <h1>{data.name}</h1>
        <span>{data.email}</span>
        <p>{data.jobs}</p>
        <span>{data.gender}</span>
        <span>{data.phone}</span>
        <div>
          <button>
            Update
          </button>
          <button>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserList
