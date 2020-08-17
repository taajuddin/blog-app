import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardTitle } from 'reactstrap';
import PostShow from './PostShow'

const FlexBox = ({ row, children }) => <div style={{ display: 'flex', flexDirection: row ? 'row' : 'column', ...(row ? { flex: 1 } : {}) }}>
    {children}
</div>

const Users = () => {
    const [posts, setPosts] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(response)
            setPosts(response.data);
        })
    }, []);

        return (
            <FlexBox row>
                <div style={{ minWidth: '300px', background: 'light' }}>
                    <h1 className="text-center">Posts - {posts.length}</h1>
                    <Card className="scroll">
                    {
                        posts.map(function (post) {
                            return <CardTitle className="border text-primary " key={post.id} id={post.id} onClick = {e => setSelected(post.id)}>{post.title}</CardTitle>
                        })
                    }
                    </Card>
                </div>

                <div>
                    {
                        selected != null && <PostShow id={selected} />
                    }
                    
                </div>
            </FlexBox>
        )
}

export default Users

