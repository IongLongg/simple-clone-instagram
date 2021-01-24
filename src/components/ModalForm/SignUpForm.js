import React, { useContext, useState } from 'react'
import { FormControl, Button } from 'react-bootstrap'
import ModalForm from './ModalForm'
import '../../App.css'
import { AuthContext } from '../../contexts/AuthContext'

const SignUpForm = () => {
    const auth = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    return (
        <ModalForm formName='Sign up' handleForm={() => auth.signup(email, password, username)}>
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
        </ModalForm>
    )
}

export default SignUpForm
