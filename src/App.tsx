import { useEffect } from "react";
import { getUsers } from "./redux/actions/user.actions";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./redux/store";
import { UsersType } from "./redux/actions/userTypes.actions";
import UserList from "./components/UserList";

function App() {
  const dispatch = useDispatch()
  const user = useSelector((state:RootStore) => state.handleUsers.users)
  const users = user || []

  useEffect(() => {
    dispatch(getUsers())
  },[dispatch])

  return (
    <div className="App">
      <form>
        <input />
        <button type="submit">Add</button>
      </form>
      {users.map((data: UsersType, key: number) => (
        <UserList 
          data = {data}
          key = {key}
        />
      ))}
    </div>
  );
}

export default App;
