import { ChangeEvent, useEffect, useState } from "react";
import { addUsersAction, deleteUserAction, getUsers } from "./redux/actions/user.actions";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./redux/store";
import { UsersType } from "./redux/actions/userTypes.actions";
import UserList from "./components/UserList";

function App() {
  const dispatch = useDispatch()
  const user = useSelector((state:RootStore) => state.handleUsers.users)
  const users = user || []
  const [addUsers, setAddUsers] = useState({
    name: "",
    phone: "",
    jobs: "",
    gender: "",
    email: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setAddUsers({
      ...addUsers,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: any):void => {
    e.preventDefault()
    dispatch(addUsersAction(addUsers))
  }

  const deleteUsers = (id:string): void => {
    dispatch(deleteUserAction(id))
  }

  useEffect(() => {
    dispatch(getUsers())
  },[dispatch])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <p>Name</p>
            <input 
              type="text"
              value={addUsers.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Phone</p>
            <input 
              value={addUsers.phone}
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Jobs</p>
            <input 
              type="text"
              value={addUsers.jobs}
              name="jobs"
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Gender</p>
            <input 
              type="text"
              value={addUsers.gender}
              name="gender"
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Email</p>
            <input 
              type="text"
              value={addUsers.email}
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
      {users.map((data: UsersType, key: number) => (
        <UserList 
          data = {data}
          key = {key}
          deleteUsers = {deleteUsers}
        />
      ))}
    </div>
  );
}

export default App;
