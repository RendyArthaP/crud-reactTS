import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { addUsersAction, deleteUserAction, getUsers, updateUserAction } from "../redux/actions/user/user.actions";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../redux/store";
import { UsersType } from "../redux/actions/user/userTypes.actions";
import UserList from "../components/UserList";
import Navbar from "../components/Navbar";

const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector((state:RootStore) => state.handleUsers.users)
  const users = user || []
  const [updateUsers, setUpdateUsers] = useState<boolean>(false)
  const [addUsers, setAddUsers] = useState<UsersType>({
    id: "",
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

  const handleSubmit = (e: FormEvent):void => {
    e.preventDefault()
    if(!updateUsers) {
      dispatch(addUsersAction(addUsers))
      setAddUsers({
        id: "",
        name: "",
        phone: "",
        jobs: "",
        gender: "",
        email: ""
      })
    } else {
      const newUsers = {
        id: addUsers.id,
        name: addUsers.name,
        phone: addUsers.phone,
        jobs: addUsers.jobs,
        gender: addUsers.gender,
        email: addUsers.email
      }
      dispatch(updateUserAction(newUsers));
      setAddUsers({
        id: "",
        name: "",
        phone: "",
        jobs: "",
        gender: "",
        email: ""
      })
      setUpdateUsers(!updateUsers)
    }
  }

  const deleteUsers = (id:string): void => {
    dispatch(deleteUserAction(id))
  }

  const editUsers = (data: {} | any):void => {
    setUpdateUsers(true)
    setAddUsers(data)
  }

  useEffect(() => {
    dispatch(getUsers())
  },[dispatch])

  return (
    <div>
      <Navbar />
      <form>
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
        <button 
          type="submit"
          onClick={handleSubmit}
        >
          {updateUsers ? "Update" : "Add"}
        </button>
      </form>
      {users.map((data: UsersType, key: number) => (
        <UserList 
          data = {data}
          key = {key}
          deleteUsers = {deleteUsers}
          editUsers = {editUsers}
        />
      ))}
    </div>
  )
}

export default Home
