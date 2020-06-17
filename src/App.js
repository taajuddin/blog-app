import React from 'react'
import {BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import Posts from './Posts'
import Users from './Users'
import UserShow from './UserShow'
import PostShow from './PostShow'

function App(props){
    return (
        <BrowserRouter>
        <div>
            <h1>UI BLOG</h1>

            <Link to="/">Home</Link> -
            <Link to="/Posts">Posts</Link> -
            <Link to="Users">Users</Link>

            <Route path="/" component={Home} exact={true} />
            <Route path="/Posts" component={Posts} exact={true}/>
            <Route path="/Posts/:id" component={PostShow} />            
            <Route path="/Users" component={Users} exact={true}/> 
            <Route path="/users/:id" component = {UserShow}/>

        </div>
        </BrowserRouter>
    )
}
export default App