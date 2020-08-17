import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardImg, CardTitle, CardText } from 'reactstrap';
import POST from './post.jpg'


const  PostShow = ({id}) => {
    const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            const post = response.data
            setPost(post)
        })
    }, [id]);

        return (
            <div>
                <Card style={{marginTop: "55px"}}>
                    {post != null && <>
                        <CardTitle className="text-center text-light" style={{fontSize: "25px", backgroundColor: "gray"}}><b>Post-Title:-</b> {post.title} </CardTitle>
                        <CardImg style={{height: "400px"}} top width="100%" src={POST} alt="Card image cap" />
                        <CardText className="text-center mt-2" style={{fontSize: "25px", backgroundColor: "light"}}><b>Post-Body:-</b> {post.body} </CardText>
                    </>}
                    <hr/>
                </Card>
                
                
            </div>
        )
}

export default PostShow;