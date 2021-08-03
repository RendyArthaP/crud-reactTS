import { UsersType } from "../redux/actions/userTypes.actions";

interface Props {
  data: UsersType,
  deleteUsers(id: string): void
  editUsers(data: {} | any): void
}

const UserList = ({ data, deleteUsers, editUsers }: Props) => {
  return (
    <div>
      <div>
        <h1>{data.name}</h1>
        <span>{data.email}</span>
        <p>{data.jobs}</p>
        <p>{data.gender}</p>
        <p>{data.phone}</p>
        <div>
          <button onClick={() => editUsers(data)}>
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
