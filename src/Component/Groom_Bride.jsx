import React, { useState, useEffect, createContext } from 'react'
import Step5 from './Personal_details';
import Personal_details from './Personal_details';
import { useHistory } from 'react-router-dom';
import { API_BASE_URL, API_PROXY_URL } from './Config';
import Mydashboard from './Mydashboard';
import { useNavigate } from 'react-router-dom/dist';
const MyContext = createContext({ Event: "" });
function Groom_Bride() {
	const navigate = useNavigate();
	const [Event, setEvent] = useState("");
	const [isSuccess, setisSuccess] = useState(false);
	const [isDisplayed, setIsDisplayed] = useState(true);
	const [check, setCheck] = useState(false);
	const [isDisplaye, setIsDisplaye] = useState(true);
	const handleGenderSelect = (selectedGender) => {
		setEvent(selectedGender);
	};
	useEffect(() => {
		const corsProxyUrl = API_PROXY_URL;
		const apiUrl = API_BASE_URL + 'CountByEventId';
		fetch(corsProxyUrl + apiUrl, {
			method: 'GET',
			headers: {
				"UserId": sessionStorage.getItem('UserId'),
				"Token": sessionStorage.getItem('UserToken'),
				'DeviceType': 'web',
				'Method': 'ShowStopper'
			}
		})
			.then(response => response.json())
			.then(response => {
				  console.log(response.Groom)
				 console.log(response.Bride)
				 if(response.Groom === 1 && response.Bride === 1){
					setIsDisplaye(false)
					setCheck(true);
				 }
				 else{
				 }
			})
	}, [])
	function handleSelect() {
		if (Event === 'Bride') {
			console.log(Event)
			alert('you selected an Bride')
		} else if (Event === 'Groom') {
			console.log(Event)
			alert('you selected an Groom')
		} else {
			alert('Please select an option before submitting.');
		}
		setIsDisplayed(false);
		setisSuccess(true);
	}
	function handleSelectbg(e){
      e.preventDefault();
	    const corsProxyUrl = API_PROXY_URL;
		const apiUrl = API_BASE_URL + 'UpdateFinalStep';
		fetch(corsProxyUrl + apiUrl, {
			method: 'POST',
			headers: {
				"UserId": sessionStorage.getItem('UserId'),
				"Token": sessionStorage.getItem('UserToken'),
				'Method': 'WeddingEventRegister',
				'DeviceType': 'Web',
				'Content-Type': 'application/json',
				
			}
		})
			.then(response => response.json())
			.then(response => {
				  console.log(response)
				  if (response) {
					setIsDisplayed(false)
					navigate('/dasboard-page');
				  }
			})
	}
	function handleSubmit(e) {
		e.preventDefault()
	}
	return (
		<>
			{isDisplayed && (

				<div className="" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModal">
					<div className="modal-dialog" role="document " style={{ display: 'flex' }}>
						<div className="modal-content start-here" id="ProfileStep1" >

							<div className="planroll-imgbx"> <img src='assets/images/icon/pic1.jpg' alt='' />
							</div>
							<div className="start-here-bx" >
								<div className="planroll-title">
									<h5 className="title" style={{ marginTop: '10px' }}>Add details of Groom & Bride</h5>
								</div>
								<form onSubmit={handleSubmit}>
									<div className="Event-image-selector" style={{ textAlign: 'center' }} >
										
										<button className={`btnGender ${Event === 'F' ? 'btnGenderselected' : ''}`} onClick={() => handleGenderSelect('F')}>
											<img src='../assets/images/brideee.png' alt="Bride" />
											 <span style={{ color: "red" }}>Bride</span>
											 {check && <p>✅</p>}
										</button>
																	
										<button className={`btnGender ${Event === 'M' ? 'btnGenderselected' : ''}`} onClick={() => handleGenderSelect('M')} >
											<img src='../assets/images/groooom.png' alt="Groom" /><span style={{ color: "red" }}>Groom</span>
											{check && <p>✅</p>}											
										</button>
																			
										{isDisplaye && (									
										<div className="form-group">
											<button type="submit" onClick={handleSelect} className="btn btn-block gradient">Select</button>
										</div>
								 )}
								   {!isDisplaye&& (
                                   <div>
                              
                                <div className="form-group">
                 <button type="submit"  onClick={handleSelectbg} className="btn btn-block gradient">final submit</button> 
                               </div>
                          </div>
                                        )}
									</div>
								</form>
								
							</div>

						</div>
					</div>
				</div>
			)}
			
			<MyContext.Provider value={{ Event }}>
				{isSuccess && <Personal_details />}
			</MyContext.Provider>
		</>
	)
}
export default Groom_Bride
export { MyContext }

