import React, { useContext } from 'react'
import { Container, Nav, Navbar, Form, Button} from 'react-bootstrap'
import SignInForm from './ModalForm/SignInForm'
import SignUpForm from './ModalForm/SignUpForm'
import { AuthContext } from '../contexts/AuthContext'

const NavbarHeader = () => {
    const auth = useContext(AuthContext);

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
                {auth.user ? (
                    <Button variant='secondary' onClick={() => auth.signout()}>Log out</Button>
                ) : (
                    <div>
                        <SignInForm/>
                        <SignUpForm/>
                    </div>
                )}
            </Container>
        </Navbar>
    )
}

export default NavbarHeader
