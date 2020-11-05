import React from 'react'
import { Button } from 'react-bootstrap'

function SideBar({ user }) {
    return (
        <div className='sidebar-sticky-top text-center pl-2'>
            {/* account info */}
            {user &&
                (<div className='d-flex justify-content-between py-4'>
                    <img className='rounded-circle border p-1 m-0' width={64} height={64} src='./logo512.png' alt='avatar'/>
                    <div className='d-flex flex-column align-items-start ml-2 p-2 w-100'>
                        <b>{user.displayName}</b>
                        <p className='text-muted'>{user.email}</p>
                    </div>
                    <Button variant='link' style={{textDecoration:'none'}}>Switch</Button>
                </div>)
            }
            {/* suggest friend box */}
            <div className='d-flex flex-column '>
                <div className='d-flex justify-content-between'>
                    <h5 className='text-muted'>Suggestions</h5>
                    <span>See all</span>
                </div>
                <div className='d-flex justify-content-between pt-3'>
                    <img className='rounded-circle border mt-1' width={40} height={40}  src='./default-avatar.png' alt='avatar'/>
                    <div className='d-flex flex-column align-items-start pl-2 w-100'>
                        <b>Friend</b>
                        <p className='text-muted'>Suggestions for you</p>
                    </div>
                    <Button className='pr-0' variant='link' style={{textDecoration:'none'}}>Follow</Button>
                </div>
                <div className='d-flex justify-content-between pt-3'>
                    <img className='rounded-circle border mt-1' width={40} height={40}  src='./default-avatar.png' alt='avatar'/>
                    <div className='d-flex flex-column align-items-start pl-2 w-100'>
                        <b>Friend</b>
                        <p className='text-muted'>Suggestions for you</p>
                    </div>
                    <Button className='pr-0' variant='link' style={{textDecoration:'none'}}>Follow</Button>
                </div>
                <div className='d-flex justify-content-between pt-3'>
                    <img className='rounded-circle border mt-1' width={40} height={40}  src='./default-avatar.png' alt='avatar'/>
                    <div className='d-flex flex-column align-items-start pl-2 w-100'>
                        <b>Friend</b>
                        <p className='text-muted'>Suggestions for you</p>
                    </div>
                    <Button className='pr-0' variant='link' style={{textDecoration:'none'}}>Follow</Button>
                </div>
            </div>
        </div>
    )
}

export default SideBar
