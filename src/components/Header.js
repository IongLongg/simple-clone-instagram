import React from 'react'
import { Container, Nav, Navbar, Form} from 'react-bootstrap'


function Header({children}) {
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
                {children}
            </Container>
        </Navbar>
    )
}

export default Header
