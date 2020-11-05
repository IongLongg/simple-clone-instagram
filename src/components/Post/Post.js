import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { Card,  InputGroup,  Navbar, Button, FormControl, Image } from 'react-bootstrap'
import { db } from '../../firebase'

function Post({currentUser, postId, username, imageUrl, caption}) {
    const [comments, setComments] = useState([]) 
    const [comment, setComment] = useState('')

    const postComment = (event) => {
        event.preventDefault()
        if(!currentUser){
            alert('Login to comment')
            return
        }

        db.collection('posts')
            .doc(postId)
            .collection('comments')
            .add({
                text : comment,
                username : currentUser.displayName,
                timestamp : firebase.firestore.FieldValue.serverTimestamp()
            })
        setComment('')
        
    }

    useEffect(() => {
        let unsubscribe 
        postId && (
            unsubscribe = db.collection('posts')
                            .doc(postId)
                            .collection('comments')
                            .orderBy('timestamp', 'desc')
                            .onSnapshot((snapshot) => {
                                setComments(snapshot.docs.map(doc => doc.data()))
                            })
        )

        return () => {
            unsubscribe()
        }
    }, [postId])

    return (
        <Card className='border-solid-light my-5'>
            <Navbar  variant="dark">
                <Navbar.Brand href="#" >
                    <Image
                        className='mr-3'
                        alt="avatar"
                        src='./logo512.png'
                        width="42"
                        height="42"
                        roundedCircle 
                    />
                    <a href={`#${username}`} style={{color:'black'}}><b>{username}</b></a>             
                </Navbar.Brand>
            </Navbar>
            <Card.Img style={{borderRadius:'0'}} src={imageUrl}/>
            <Card.Body>
                <Card.Text>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                </Card.Text>
                <Card.Text>
                    <b>8,047 likes</b>
                </Card.Text>
                <Card.Text className='px-0'>
                    <b>{username}</b> {caption}
                </Card.Text>
                {
                    comments.map(cmt => (
                        <Card.Text>
                            <b>{cmt.username}</b> {cmt.text}
                        </Card.Text>
                    ))
                }
            </Card.Body>
            <Card.Footer className='bg-white p-2'>
                <InputGroup>
                    <FormControl
                        type='text'
                        style={{boxShadow:'none', outline:'none'}}
                        placeholder="Add a comment..."
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                    />
                    <InputGroup.Append>
                        <Button 
                            type='submit'
                            disabled={!comment} 
                            style={{textDecoration:'none'}} 
                            variant='link'
                            onClick={postComment}
                        >
                            Post
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Card.Footer>
        </Card>
    )
}

export default Post
