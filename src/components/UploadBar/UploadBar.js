import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import UploadForm from './UploadForm';

const UploadBar = () => {
    const auth = useContext(AuthContext);
    return (
        <div>
            {auth.user ? (
              <>
                <p className='text-muted display-4'>{`How are you feeling today, ${auth.user.displayName} ?`}</p>
                <UploadForm username={auth.user.displayName} />
              </>
            ) : (
              <div className='text-center border py-5'>
                <h3>Login to upload</h3>
              </div>
            )}
        </div>
    )
}

export default UploadBar
