import React, { useContext, useState } from 'react'
import { FormControl } from 'react-bootstrap'
import ModalForm from './ModalForm'
import '../../App.css'
import { AuthContext } from '../../contexts/AuthContext'

const SignInForm = () => {
    const auth = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ModalForm formName="Login" handleForm={() => auth.signin(email, password)}>
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
        </ModalForm>
    )
}

export default SignInForm
