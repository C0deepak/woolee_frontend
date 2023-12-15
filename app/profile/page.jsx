'use client'
import { useAuth } from '@/context/authContext'
import React from 'react'

const Profile = () => {
  const { isLoggedIn, user } = useAuth()
  return (
    <div>
      <div>Profile</div>
      <div>{user.name}</div>
    </div>
  )
}

export default Profile