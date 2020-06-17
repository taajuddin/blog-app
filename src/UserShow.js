import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserShow extends React.Component {

    constructor(){
        super()
        this.state = {
            user: {},
            posts: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            //console.log(response.data)
            const user = response.data
            this.setState({ user })
        })

        axios.get(`http://jsonplaceholder.typicode.com/posts?userid=${id}`)
        .then((response) => {
            //console.log(response.data)
            const posts = response.data
            this.setState({ posts })
        })
    }

    render() {
        console.log('user show component', this.props)
        return (
            <div>
                <h1>USER NAME - {this.state.user.name} </h1>
                <h2>POSTS WRITTEN BY USER </h2>

                <ul>
                {
                    this.state.posts.map(function(post){
                        return <li key= {post.id}> <Link to={`/post/${post.id}`}>{post.title} </Link> </li>
                    })
                }
               </ul>

                
            </div>
        )
    }

    
}
export default UserShow