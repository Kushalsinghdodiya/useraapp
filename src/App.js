import React, { Component } from 'react'
import {Route ,Switch,Redirect} from 'react-router-dom'
import pageNotFound from './components/pageNotFound';
import UserDetail from './components/UserDetail';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from './components/CreateUser';



function App() {
  return (
  <Switch>
      <Route exact path="/" component={UserList}/>
      <Route path="/userdetails/:id" component={UserDetail}/>
      <Route path="/createuser" component={CreateUser}/>
      <Route to='/notfound' component={pageNotFound}/>
      <Redirect to='/notfound'/>
  </Switch>  
  );
}

export default App;
