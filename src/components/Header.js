import React, { useState } from 'react'
import { Container, Nav, Navbar, Button, Modal, Form } from 'react-bootstrap'
import '../App.css'
import SearchIcon from '../search.svg'

function Header() {
    const [login, setLogin] = useState(false) 
    const [register, setRegister] = useState(false)  
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [username, setUsername] = useState(null)

    const handleRegister = (event) => {
        event.preventDefault()
        console.log(email, password, username)
    }
    
    return (
        <Navbar bg='white' sticky='top' className='py-2 border-bottom'>
            <Container>
                <Navbar.Brand href='/'>
                    <img
                        src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                        alt='logo'
                    />
                </Navbar.Brand>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mx-auto'>
                        <Form.Control
                            type='text'
                            placeholder={`Search...`}
                            className='bg-light border'
                            style={{outline:'none', boxShadow:'none'}}
                        />
                        
                    </Nav>
                    
                </Navbar.Collapse>
                <Button className='mr-3' variant='outline-secondary' onClick={() => setLogin(true)}>
                    Login
                </Button>
                <Button variant='outline-secondary' onClick={() => setRegister(true)}>
                    Register
                </Button>

                <Modal show={login} onHide={() => setLogin(false)}>
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
                        <Form.Control
                            className='border-bottom mb-2'
                            style={{boxShadow:'none', outline:'none'}}
                            type='text'
                            placeholder='Username'
                            required
                        />
                        <Form.Control
                            className='border-bottom mb-2'
                            style={{boxShadow:'none', outline:'none'}}
                            type='password'
                            placeholder='Password'
                            required
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type='submit' variant="outline-success" >
                            Login
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={register} onHide={() => setRegister(false)}>
                    <Modal.Header className='text-center' closeButton>
                        <Modal.Title className='w-100'>
                            <img
                                className='ml-3'
                                src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                                alt='logo'
                            />
                        </Modal.Title>
                    </Modal.Header>
                    <Form>
                        <Modal.Body>
                            <Form.Control
                                className='border-bottom mb-2'
                                style={{boxShadow:'none', outline:'none'}}
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Form.Control
                                className='border-bottom mb-2'
                                style={{boxShadow:'none', outline:'none'}}
                                type='text'
                                placeholder='Username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <Form.Control
                                className='border-bottom mb-2'
                                style={{boxShadow:'none', outline:'none'}}
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                                required
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onSubmit={(e) => handleRegister(e)} variant='outline-success'>
                                Register
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </Container>
        </Navbar>
    )
}

export default Header
