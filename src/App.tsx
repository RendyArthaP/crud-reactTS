import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route 
            path="/" 
            exact
          >
            <Home />
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
