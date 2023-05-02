import React from 'react'
import { useAuth } from '../../context/AuthContext'
import {Text} from '@chakra-ui/react'

function Profile() {

    const {user}=useAuth();


  return (
    <>
    <Text fontSize="22" fontWeight="semi-bold">Profile</Text>
    {JSON.stringify(user)}
    </>
  )
}

export default Profile