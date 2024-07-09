import React from 'react'
import UserSidebar from '../UserSidebar';
import Profile from './Profile';

const UserProfile = () => {
  return (
    <div className='flex'>
        <UserSidebar />
        <Profile />
    </div>
  )
}

export default UserProfile