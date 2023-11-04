import React from 'react'
import Sidenavbar from './Sidenavbar'
import { Link } from 'react-router-dom'

export default function UpcomingEvent() {
  return (
    <div>
        <h5 className='cbg-succes text-center p-2'>Upcoming Events <Link to='/upcoming-events' className='text-dark'></Link> </h5>
    </div>
  )
}
