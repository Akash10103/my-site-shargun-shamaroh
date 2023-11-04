import React, { useState, useEffect,} from 'react'
import { API_BASE_URL, API_PROXY_URL } from './Config';
import Groom_Bride from './Groom_Bride';
import { ThreeDots } from 'react-loader-spinner';
import Personal_details from './Personal_details';



function EventDate(props) {
	const { data } = props
	var EventRelationid =0;
	const [Edate, setEdate] = useState("")
	const [Eaddres, setEaddres] = useState("")


	const [options, setOptions] = useState([]);
	const [selectedOption, setSelectedOption] = useState();

	const [isSuccess, setisSuccess] = useState(false);
	const [isDisplayed, setIsDisplayed] = useState(true);

	const [isLoading, setIsLoading] = useState(false);
	const [showPersonalDetails , setShowPersonalDetails]=useState(false)
	useEffect(() => {
		const corsProxyUrl = API_PROXY_URL;
		const apiUrl = API_BASE_URL + 'GetEventRelation';
		fetch(corsProxyUrl + apiUrl,
			{
				method: 'GET',
				headers: {
					"UserId": sessionStorage.getItem('UserId'),
					"Token": sessionStorage.getItem('UserToken'),
					"DeviceType": "Web",
					"Method": "UpcomingEventById",
					"Authorization": "Basic c3NfVXBjb21pbmdFdmVudEJ5SWQ6U2hAZ3Vuc0BtQHJvaF9VcGNvbWluZ0V2ZW50QnlJZA=="
				}
			})
			.then(response => response.json())
			.then(response => {
				setOptions(response);
				console.log(response);
				console.log(data)
				// if(data!=null){
				//data agr liya h to	
				// }
				// else{
				// 	// </step3>
				// }
				if(data===1){

				}

			})
			.catch(error => console.error(error))
	}, []);


	const handleSelect = (event) => {
		setSelectedOption(event.target.value);
		EventRelationid= (event.target.value)
          console.log("EventRelationid:" + EventRelationid)

	};

	function Ebtn() {
		setIsLoading(true);
			const corsProxyUrl = API_PROXY_URL;
			const apiUrl = API_BASE_URL + 'EventRegistration';
			fetch(corsProxyUrl + apiUrl,
				{
					method: 'POST',
					
					headers: {
						"UserId": sessionStorage.getItem('UserId'),
						"DeviceType": "Web",
						"Token": sessionStorage.getItem('UserToken'),
						"Method": "EventRegister",
						"Authorization": "Basic c3NfZXZlbnRSZWdpc3RyYXRpb246U2hAZ3Vuc0BtQHJvaF9FdmVudFJlZw==",
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						Event_Venue : Eaddres,
						Event_Date: Edate,
						EventTypeId: data,
						EventRelationId: selectedOption
						
					})
				})
				.then(response => response.json())
				.then(response => {
					console.log(response);
					if(response.EventTypeId ==1){
						setIsDisplayed(false);
		                setisSuccess(true);
						setIsLoading(false)
					}
					else if(response.EventTypeId ==2) {
						setIsDisplayed(false);
		                setisSuccess(true);
						setShowPersonalDetails(true);

					}
					else{
				
					}
				})
				.catch(error => console.error(error))
				var EventAddres = Eaddres;
				console.log('EventAddres:' + EventAddres);
				var EventDate= Edate;
				console.log('EventDate:'+EventDate);	
	}
	return (
		<>
		{isDisplayed  && (
			<div className="modal-dialog model-lg" role="document " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<form className="modal-content start-planning " id="ProfileStep2"  >
					
					<div className="planroll-imgbx" ><img src='assets/images/icon/pic2.png' /></div>
					<div className="start-here-bx">
						<div className="">
							<div className="planroll-title">
								<h5 className="title">What Planning have you done so far?</h5>
							</div>

							<div className="form-group">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text " id="basic-addon1"><i
											className="fa fa-map-marker"></i></span>
									</div>
									<input type="text" className="form-control" onChange={(e) => setEaddres(e.target.value)}
										value={Eaddres} placeholder="Event Address" />
								</div>
							</div>

							    <div>
									<select  placeholder='Select Events' value={selectedOption} onChange={handleSelect}
										id="eventDropdown" name="eventDropdown" style={{ width: '97%', height:'45px',
										background: '#f4f4f4', marginBottom: '10px' }} >
											
										{options.map((option) => (
											<option key={option.Id} value={option.Id}>
												{option.Value}
											</option>
										))}
									</select>
								</div>
							

							<div className="form-group">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text " id="basic-addon1"><i
											className="fa fa-calendar"></i></span>
									</div>
									<input type="date" className="form-control" onChange={(e) => setEdate(e.target.value)}
										value={Edate} placeholder="Event Date" min={new Date().toISOString().split("T")[0]} />
								</div>
							</div>

							<div className="modal-footer text-center">
								<button type="button" onClick={Ebtn} className="btn gradient" data-toggle="tooltip"
									data-placement="top" title="Congrats! Even your names look great together.">Next</button>
									 <div className="loader"> {isLoading && ( <ThreeDots color="#00BFFF" height={80} width={80} />)}</div>
							</div>
						</div>
					</div>

				</form> 
			</div>
			 )}
			 {isSuccess && !showPersonalDetails && <Groom_Bride/> } 
			 {showPersonalDetails && <Personal_details />}
		</>
	)
}

export default EventDate