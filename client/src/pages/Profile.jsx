import React from 'react'
import {useSelector} from 'react-redux'

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className='max-w-lg mx-auto p-3'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.avatar} alt='profile' className='rounded-full h-24 w-25 object-cover cursor-pointer self-center mt-3 '/>
        <input id='username' type='text' placeholder='Username' className='border p-3 rounded-lg' />
        <input id='email' type='text' placeholder='Email' className='border p-3 rounded-lg' />
        <input id='password' type='text' placeholder='Password' className='border p-3 rounded-lg' />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:bg-green-700 hover:opacity-85 disabled:opacity-80'>Update</button>
      </form>
      <div className='flex justify-between mt-6 font-bold'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile
