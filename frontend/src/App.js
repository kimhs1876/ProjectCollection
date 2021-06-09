import React from 'react'
import { Route } from "react-router-dom"
import [ Counter ] from '/user/counter'
import [ Login, Signup, UserDetail, UserEdit, UserList ] from 'user/index'
import Home from 'common/Home'


const App = () => {
  return (<div>
    <Route exact path='/' component={Home}/>
    <Route exact path='/counter' component={Counter}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/signup' component={Signup}/>
    <Route exact path='/user-list' component={UserList}/>
    <Route exact path='/user-edit' component={UserEdit}/>
    <Route exact path='/user-detail' component={UserDetail}/>
         

  </div>)  
}

export default App