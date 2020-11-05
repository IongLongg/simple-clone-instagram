import React, { useState, useRef } from 'react'
import firebase from 'firebase'
import { Button, FormControl, ProgressBar } from 'react-bootstrap'
import { db, storage } from '../firebase'

function UploadBar({username}) {
    const [caption, setCaption] = useState('')
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(0)
    const fileInput = useRef(null)

    const handleFile = (e) => {
        if(e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleUpload = () => {
        const uploadFile = storage.ref(`images/${file.name}`).put(file)

        uploadFile.on(
            "state_changed",
            (snapshot) => {
                //progress bar counter
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progress)
            },
            (error) => {
                console.log(error)
                alert(error.message)
            },
            () => {
                // upload completed
                storage
                    .ref('images')
                    .child(file.name)
                    .getDownloadURL()
                    .then((url) => {
                        // post to db
                        db.collection('posts').add({
                            timestamp : firebase.firestore.FieldValue.serverTimestamp(), // record times update
                            caption : caption,
                            imageUrl : url,
                            username: username
                        }) 
                        setProgress(0)
                        setCaption('')
                        setFile(null)
                        fileInput.current.value = ''
                    })
                    .catch(error => alert(error.message))
            }
        )
    }

    return (
        <div className='px-1 py-2 border'>
            <FormControl
                as='textarea'
                type='text'
                value={caption}
                className='border-bottom mb-3 px-1 pb-0 pt-3'
                style={{boxShadow:'none', outline:'none'}}
                placeholder='Enter a caption...'
                onChange={(e) => setCaption(e.target.value)}
            />
            <FormControl
                ref={fileInput}
                type='file'
                onChange={handleFile}
                required
            />
            {(progress > 0) && <ProgressBar max={100} variant='success' className='mt-3' animated now={progress} />}
            <Button 
                className='mt-3 w-100 bg-light border-0' 
                variant='light'
                onClick={handleUpload}
            >
                UPLOAD
            </Button>
        </div>
    )
}

export default UploadBar
