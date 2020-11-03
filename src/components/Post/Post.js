import React from 'react'
import { Card,  InputGroup,  Navbar, Button, FormControl, Image } from 'react-bootstrap'

function Post({username, imageUrl, caption}) {
    return (
        <Card className='border-solid-light' style={{marginBottom:'50px'}}>
            <Navbar  variant="dark">
                <Navbar.Brand href="#" >
                    <Image
                        className='mr-3'
                        alt="avatar"
                        src={imageUrl}
                        width="42"
                        height="42"
                        roundedCircle 
                    />
                    <a href='#' style={{color:'black'}}><b>{username}</b></a>             
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
                <Card.Text>
                    <strong>{username}</strong> {caption}
                </Card.Text>
                <Card.Text>
                    <b>Friend 1</b> comment 1
                </Card.Text>
                <Card.Text>
                    <b>Friend 1</b> comment 1
                </Card.Text>
                <Card.Text>
                    <b>Friend 1</b> comment 1
                </Card.Text>
            </Card.Body>
            <Card.Footer className='bg-white p-2'>
                <InputGroup>
                    <FormControl
                        style={{boxShadow:'none', outline:'none'}}
                        placeholder="Add a comment..."
                    />
                    <InputGroup.Append>
                        <Button style={{textDecoration:'none'}} variant='link'>Post</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Card.Footer>
        </Card>
    )
}

export default Post
