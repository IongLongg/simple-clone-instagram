import React, { useState } from 'react'
import {Button, Modal} from 'react-bootstrap'

const ModalForm = ({children, formName, handleForm}) => {
    const [show, setShow] = useState(false);

    const handleModal = (e) => {
        e.preventDefault();
        handleForm();
        setShow(false);
    }

    return (
        <>  
            <Button className='mr-3' variant='outline-secondary' onClick={() => setShow(true)}>
                {formName}
            </Button>
            <Modal show={show} onHide={() => setShow(false)}>
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
                    {children}  
                    <Button className='w-100 bg-light border-0' onClick={handleModal} variant='light'>
                        {formName}
                    </Button>                 
                </Modal.Body>
            </Modal>
        </>
        
    )
}

export default ModalForm
