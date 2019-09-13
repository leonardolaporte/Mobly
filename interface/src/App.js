import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import UsersList from './components/UsersList'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'
import PostsList from './components/PostsList'
 
import 'bootstrap/dist/css/bootstrap.css'
 
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={UsersList} /> 
            <Route exact path='/create' component={CreateUser} />
            <Route exact path='/user/:id' component={UpdateUser} />   
            <Route exact path='/post/:id' component={PostsList} />     
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
 
export default App;