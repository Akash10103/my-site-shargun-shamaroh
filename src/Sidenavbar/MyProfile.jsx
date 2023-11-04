import React from 'react'
import Sidenavbar from './Sidenavbar'
import { Link } from 'react-router-dom'

export default function MyProfile() {
  return (
    <div>
       <h5 className='bg-succes text-center p-2'>Profile <Link to="/profile" className='text-dark'></Link></h5>  
    </div>
  )
}
