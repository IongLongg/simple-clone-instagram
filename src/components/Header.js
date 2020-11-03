import React, { useState } from 'react'
import { Container, Nav, Navbar, Button, Modal } from 'react-bootstrap'

function Header() {
    const [show, setShow] = useState(false)  
    
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)


    
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
                        <input
                            type='text'
                            placeholder='Search'
                            className='px-4 text-center bg-light border'
                            style={{outline:'none'}}
                        />
                        
                    </Nav>
                    
                </Navbar.Collapse>
                <Button outline variant='light' onClick={handleShow}>
                    Login
                </Button>

                <Modal show={show} onHide={handleClose}>
                    {/* <Button as={Modal.Header} className='text-center m-0 p-0' closeButton>
                        <img
                            className='text-center'
                            src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                            alt='logo'
                        />
                    </Button> */}
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
                        Login form
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </Navbar>
    )
}

export default Header
