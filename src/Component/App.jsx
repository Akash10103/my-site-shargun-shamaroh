import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Mydashboard from './Mydashboard'
import BirthdayOrWedding from './BirthdayOrWedding'
import Home from '../pages/Home'
import EventDate from './EventDate'
import Groom_Bride from './Groom_Bride'
import Personal_details from './Personal_details'
import Event_Place from './Event_Place'
import Confirm_Details from './Confirm_Details'
import Extra_Practice from './Extra_Practice'
import MyProfile from '../Sidenavbar/MyProfile'
import UpcomingEvent from '../Sidenavbar/UpcomingEvent'
import AddEvents from '../Sidenavbar/AddEvents'
import Share from '../Sidenavbar/Share'
import Tester from './Tester'

function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
         
             <Route  path='/' element={<Home/>}/>
            <Route path='/' element={<BirthdayOrWedding/>}/>  
            <Route path='/' element={<Groom_Bride/>}/> 
            <Route path='/' element={<EventDate/>}/>
            <Route path='/' element={<Personal_details/> }/>  
            <Route path='/' element={<Event_Place/> }/> 
            <Route path='/' element={<Extra_Practice/> }/> 
            {/* <Route path='/' element={<Tester/> }/>  */}
            <Route path='/' element={<Confirm_Details/> }/>  
            <Route path='/dasboard-page' element={<Mydashboard/> }/>  
             {/* <Route exact path="/page-one" component={Step3} /> */}
             <Route path='/profile' element={<MyProfile />}/>
             <Route path='/upcoming-events' element={<UpcomingEvent/>}/>
             <Route path='/add-events' element={<AddEvents/>}/>
             <Route path='/share' element={<Share/>}/>
             <Route path='/accounts' element={<Share/>}/>
     
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App


// const handleFormSubmit=(event)=>{
//   event.preventDefault()
//   setErrors(validation(value))
//   // navigate('/Step1')

//   console.log(value)
