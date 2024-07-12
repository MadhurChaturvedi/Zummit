import React from 'react';
import UserSidebar from '../UserSidebar';
import Appointment from './Appointment ';

const UserAppointments = () => {
  return (
    <div className='flex bg-[#F2FCFF]'>
        <UserSidebar />
        <Appointment/>
    </div>
  )
}

export default UserAppointments