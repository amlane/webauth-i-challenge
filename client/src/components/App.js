import React from 'react';
import { Route, Link } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';

import SignUp from './SignUp';
import Login from './Login';
import Users from './Users';

import './App.css';
class App extends React.Component {



  render(){
    return (
      <div className="App">
        <nav>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/users">Users</Link>
        </nav>
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/user' component={Users}/>
      </div>
    );
  }
}

export default App;
