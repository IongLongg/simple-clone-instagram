import React, {  useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { db } from '../firebase'
import Post from './Post/Post';

const NewsFeed = () => {
    const auth = useContext(AuthContext);

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map(doc => {
              const post = doc.data();
              post.id = doc.id;
              return post;
            }));
          });
    }, [])

    return (
        <>
            {posts.map(post => (
                <Post
                    key={post.id}
                    currentUser={auth.user?.displayName}
                    postId={post.id}
                    username={post.username}
                    imageUrl={post.imageUrl}
                    caption={post.caption}
                />
            ))}
        </>
    )
}

export default NewsFeed
