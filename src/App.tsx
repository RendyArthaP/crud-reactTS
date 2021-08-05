import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import { RootStore } from "./redux/store";

function App() {
  const isLogin = useSelector((state: RootStore) => state.handleAuth.logged)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route 
            path="/" 
            exact
          >
            {isLogin ? <Home /> : <Redirect to="/login"/>}
          </Route>
          <Route path="/login">
            <Login />
          </Route>      
          <Route path="/register">
            <Register />
          </Route>     
        </Switch>
      </Router>
    </div>
  );
}

export default App;
