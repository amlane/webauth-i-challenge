import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';

// import SignUp from './SignUp';
// import Login from './Login';
import Users from './Users';


class App extends React.Component {



  render(){
    return (
      <div className="App">
        {/* <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} /> */}
        <PrivateRoute path='/user' component={Users}/>
      </div>
    );
  }
}

export default App;
