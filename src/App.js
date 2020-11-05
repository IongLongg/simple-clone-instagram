import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Modal, FormControl } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post/Post";
import SideBar from "./components/SideBar/SideBar";
import UploadBar from './components/UploadBar'
import { db, auth } from "./firebase";

function App() {
  //TODO: useContext to clean component
  const [posts, setPosts] = useState([]);
  const [loginModal, setLoginModal] = useState(false) 
  const [registerModal, setRegisterModal] = useState(false)  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)

  const signup = (event) => {
    event.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName : username
      })
    })
    .catch((error) => alert(error.message))
    setRegisterModal(false)
  }

  const login = (event) => {
    event.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
    .catch(error => console.log(error.message))
    setLoginModal(false)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        console.log(authUser)
        setUser(authUser)
      } else {
        setUser(null)
      }
    })

    return () => {
      unsubscribe()
    }
  },[user])

  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map(doc => {
        const post = doc.data()
        post.id = doc.id
        return post
      }));
    });
  }, []);

  return (
    <>
      <Header>
        {user ? (
          <Button variant='secondary' onClick={() => auth.signOut()}>Log out</Button>
        ) : (
          <>
            <Button className='mr-3' variant='outline-secondary' onClick={() => setLoginModal(true)}>
              Login
            </Button>
            <Button className='mr-3' variant='outline-secondary' onClick={() => setRegisterModal(true)}>
              Register
            </Button>
          </>
        )}
      </Header>

      <Modal show={loginModal} onHide={() => setLoginModal(false)}>
          <Modal.Header className='text-center' closeButton>
              <Modal.Title className='w-100'>
                  <img
                      className='ml-3'
                      src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                      alt='logo'
                  />
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <FormControl
                  className='border-bottom mb-2'
                  style={{boxShadow:'none', outline:'none'}}
                  type='email'
                  placeholder='Email'
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
              />
              <FormControl
                  className='border-bottom mb-2'
                  style={{boxShadow:'none', outline:'none'}}
                  type='password'
                  placeholder='Password'
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
              />
              <Button  className='w-100 bg-light border-0' onClick={login} variant='light'>
                LOGIN
              </Button>
          </Modal.Body>
      </Modal>

      <Modal show={registerModal} onHide={() => setRegisterModal(false)}>
          <Modal.Header className='text-center' closeButton>
              <Modal.Title className='w-100'>
                  <img
                      className='ml-3'
                      src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                      alt='logo'
                  />
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <FormControl
                  className='border-bottom mb-2'
                  style={{boxShadow:'none', outline:'none'}}
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
              <FormControl
                  className='border-bottom mb-2'
                  style={{boxShadow:'none', outline:'none'}}
                  type='text'
                  placeholder='Username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
              />
              <FormControl
                  className='border-bottom mb-2'
                  style={{boxShadow:'none', outline:'none'}}
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password'
                  required
              />
              <Button className='w-100 bg-light border-0' onClick={signup} variant='light'>
                  SIGN UP
              </Button>
          </Modal.Body>
      </Modal>

      <Container className="mt-3">
        <Row>
          {/* Post */}
          <Col md={8} className="p-0 mt-3">

            {user?.displayName ? (
              <>
                <p className='text-muted display-4'>{`How are you feeling today, ${user.displayName} ?`}</p>
                <UploadBar username={user.displayName} />
              </>
            ) : (
              <div className='text-center border py-5'>
                <h3>Login to upload</h3>
              </div>
            )}

            {/* Posts */}
            {posts.map(post => (
              <Post
                key={post.id}
                currentUser={user}
                postId={post.id}
                username={post.username}
                imageUrl={post.imageUrl}
                caption={post.caption}
              />
            ))}
          </Col>
          <Col md={4}>
              <SideBar user={user}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
