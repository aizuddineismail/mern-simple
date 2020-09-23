import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import PrivateRoute from './auth/PrivateRoute'
import Home from './core/Home'
import Signin from './auth/Signin'
import Signup from './user/Signup'
import Users from './user/Users'
import Profile from './user/Profile'
import EditProfile from './user/EditProfile'
import Menu from './core/Menu'

const MainRouter = () => {
    return (
        <div>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/users" component={Users} />
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
                <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
                <Route path="/user/:userId" component={Profile} />
            </Switch>
        </div>
    )
}

export default MainRouter