import { UsersType } from "../redux/actions/userTypes.actions";

interface Props {
  data: UsersType,
  deleteUsers(id: string): void
}

const UserList = ({ data, deleteUsers }: Props) => {
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
          <button onClick={() => deleteUsers(data.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserList
