import React from 'react'
import UserSidebar from '../UserSidebar';
import Billings from './Billings';

const UserBillings = () => {
  return (
    <div className='flex'>
        <UserSidebar />
        <Billings />
    </div>
  )
}

export default UserBillings