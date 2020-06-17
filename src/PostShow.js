import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class PostShow extends React.Component {

    constructor(){
        super()
        this.state = {
            post: {},
            user: {},
            comments: []
        }
    }
    
    componentDidMount() {
        const id = this.props.match.params.id
        
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            //console.log(response)
        const post = response.data
         console.log(post)
        this.setState({post})
        // 
        axios.get(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then((response) => {
            //console.log(response.data)
            const user = response.data
            console.log(user)
            this.setState({ user })
        })
        })
        

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => {
            console.log(response.data)
        const comments = response.data
        this.setState({
            comments
            })
        })
    }	

    render() {
        console.log('user show component', this.props)
        return (
            <div>
                <h1>USER NAME - {this.state.user.name} </h1>
                <h1>TITLE: {this.state.post.title} </h1>
                <h2>BODY: {this.state.post.body} </h2>
                <hr/>

                <h1>COMMENTS</h1>
                <ul>
                {
                    this.state.comments.map(function(comment){
                        return <li key= {comment.id}> {comment.body} </li>
                    })
                }

               </ul><hr/>

                <p> <Link to={`/users/${this.state.post.id}`}> More Posts from Author: {this.state.user.name} </Link> </p>
                
            </div>
        )
    }

    
}
export default PostShow
