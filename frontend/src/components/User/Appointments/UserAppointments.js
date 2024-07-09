import React from 'react';
import UserSidebar from '../UserSidebar';
import Appointment from './Appointment ';

const UserAppointments = () => {
  return (
    <div className='flex'>
        <UserSidebar />
        <Appointment/>
    </div>
  )
}

export default UserAppointments