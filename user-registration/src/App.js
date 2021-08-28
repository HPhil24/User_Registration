import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import { UsersList } from './UsersList';
import { CreateUser } from './CreateUser';
import { EditUser } from './EditUser';

function App() {
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Registered Users</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create User Account</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={UsersList}/>
        <Route path="/edit/:id" component={EditUser}/>
        <Route path="/create" component={CreateUser}/>
      </Switch>
    </div>
  );
}

export default App;
