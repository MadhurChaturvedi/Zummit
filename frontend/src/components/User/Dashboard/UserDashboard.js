import React from 'react'
import UserSidebar from '../UserSidebar';
import Dashboard from './Dashboard';

const UserDashboard = () => {
  return (
    <div className='flex bg-[#F2FCFF]'>
        <UserSidebar />
        <Dashboard />
    </div>
  )
}

export default UserDashboard;