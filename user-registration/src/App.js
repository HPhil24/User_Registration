import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import { UsersList } from './UsersList';
import { CreateUser } from './CreateUser';
import { EditUser } from './EditUser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" ><button className="btn btn-outline-light custom"><FontAwesomeIcon className ='font-awesome' icon={faUsers}/> Users</button></Link>
          </li>
          <li className="navbar-item">
            <Link to="/create"><button className="btn btn-outline-light custom"><FontAwesomeIcon className ='font-awesome' icon={faUserPlus}/> Register</button></Link>
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
