import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EventDate from './EventDate';

function BirthdayOrWedding() {
	const [setidEvent, setIdEvent] = useState('');
	const [isSuccess, setisSuccess] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(true);
	const handleEventSelect = (selectedEvent) => {
		setIdEvent(selectedEvent);
	};
	function Wbselect(e) {	
		e.preventDefault()
		var bg =  setidEvent 
		console.log(bg);
		setIsDisplayed(false);
		setisSuccess(true);
	}
	return (
		<>
		{isDisplayed  && (
				<div>
			<div className="" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModal">
				<div className="modal-dialog" role="document " style={{ display: 'flex' , }}>
					<div className="modal-content start-here" id="ProfileStep7" style={{
						position: "relative",}} >
							<div className="gender-image-selector" style={{ textAlign: 'center', marginTop: '100px', hight:'200px' , marginBottom:"20px"}} >
							<div>
								<button className={`btnBwed ${setidEvent === '1' ? 'btnBwedselected' : ''}`} onClick={() => handleEventSelect('1')}>
								<img src='../assets/images/wedding.png' alt="Wedding" /> <span style={{ color: "red" , width:"100%" }}>Wedding</span>
						</button>
						<button className={`btnBwed ${setidEvent === '2' ? 'btnBwedselected' : ''}`} onClick={() => handleEventSelect('2')}>
								<img src='../assets/images/birthday.png' alt="Birthday" style={{width:"100%", marginLeft:"20px", maxWidth:"200%"}} /><span style={{ color: "red",marginLeft:"20px" }}>Birthday</span>
						</button>	
						<br></br>
							</div>
							<div className="form-group">
								<button type="submit" onClick={Wbselect}  className="btn btn-block gradient">Select</button>
							</div>
						</div>
					</div>
				</div>
                   </div>
			</div>
  )}
 {isSuccess && <EventDate data={setidEvent} />} 
		</>
	)
}
export default BirthdayOrWedding


