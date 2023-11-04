import React, { useState, useEffect, useContext } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import { API_BASE_URL, API_PROXY_URL } from './Config';
import Confirm_Details from './Confirm_Details';
import { MyContextshare } from './Personal_details';

function Event_Place() {
	const { Name,Nick,Date,Fathername, Mothername, Grandfather, Grandmother,}= useContext(MyContextshare)
	let formdata;
	const [city, setCity] = useState("")
	const [pinCode, setPinCode] = useState("")
	const [address, setAddress]=useState("")

	const [stateId, setStateId] = useState(null);
	const [districtId, setdistrictId] = useState(null);

	const [states, setStates] = useState([]);
	const [selectedState, setSelectedState] = useState('');
	const [districts, setDistricts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const [ isSuccess, setisSuccess]=useState(false)
	const [isDisplayed, setIsDisplayed]= useState(true)

	useEffect(() => {
		const corsProxyUrl = API_PROXY_URL;
		const apiUrl = API_BASE_URL + 'getState';
		fetch(corsProxyUrl + apiUrl,
			{
				method: 'GET',
				headers: {
					"UserId": sessionStorage.getItem('UserId'),
					"Token": sessionStorage.getItem('UserToken'),
					"DeviceType": "Web",
					"Method": "Location",
					"Authorization": "Basic c3NfTG9jYXRpb246U2hAZ3Vuc0BtQHJvaF9sb2NhdGlvbg=="
				}
			})
			.then(response => response.json())
			.then(response => {
				setStates(response);
				setIsLoading(false)
			})
			.catch(error => console.error(error))
	}, []);

	function handleStateChange(event) {
		setIsLoading(true);
		setSelectedState(event.target.value);
		setStateId(event.target.value);
		console.log("StateId:" +event.target.value)
	}
	const handleSelectDistrict = (event) => {
		setdistrictId(event.target.value)
		let districtId= ("DistrictId:"  +event.target.value)
		console.log(districtId)
	};
	useEffect(() => {
		if (stateId) {
			const corsProxyUrl = API_PROXY_URL;
			const apiUrl = API_BASE_URL + 'getDistrict?StateId=' + stateId;
			fetch(corsProxyUrl + apiUrl,
				{
					method: 'GET',
					headers: {
						"UserId": sessionStorage.getItem('UserId'),
					    "Token": sessionStorage.getItem('UserToken'),
						"Method": "Location",
						"DeviceType": "Web",
						"Authorization": "Basic c3NfTG9jYXRpb246U2hAZ3Vuc0BtQHJvaF9sb2NhdGlvbg=="
					}
				})
				.then(response => response.json())
				.then(response => {
					setDistricts(response);
					console.log(response);
					setIsLoading(false);
				})
				.catch(error => console.error(error))
		}
	}, [stateId])

	function Submit(event) {
		if(selectedState === ""){
       alert("please fill state")
		}
		else if (city === "") {
            alert("Please Add ur city");
        }
		else if (address === "") {
            alert("Please Add ur address");
        }
		else if (pinCode === "") {
            alert("Please Add ur city");
        }
		else{
			event.preventDefault()
			 formdata = {
				city: city,
				pincode: pinCode,
				address:address
			}
			console.log(formdata);
			setIsDisplayed(false);
			setisSuccess(true);
			console.log({ Name, Nick, Date, Fathername, Mothername, Grandfather, Grandmother})
		}
	}
	return (
		<>
		{isDisplayed  && (
				<div>
			<div className="" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModal">
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					{/* <span aria-hidden="true">&times;</span> */}
				</button>
				<div className="modal-dialog" role="document" style={{
					backgroundColor: "",
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				}}>
					<form className="modal-content start-planning " id="ProfileStep2" style={{
						backgroundColor: "pink",
						display: 'flex',
						justifyContent: 'space-between'
					}}>
						<div className="planroll-imgbx">
							<img src='assets/images/Location.png' alt='' />
						</div>
						<div className="start-here-bx">
							<div className="">
								<div className="planroll-title">
									<h5 className="title">Please fill your basic information....?</h5>
								</div>
								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text " id="basic-addon1"><i
												className="fa fa-building"></i></span>
										</div>
										<input type="text" name='Grandfather' value={address}
											onChange={(e) => setAddress(e.target.value)} className="form-control"
											placeholder="Address" required />
									</div>
								</div>
                                 <div>
								<select style={{ width: '97%', height:'45px',
    background: '#f4f4f4', marginBottom: '10px' }} value={selectedState}
									onChange={handleStateChange}>
									{states.slice(0).map((state) => (
										<option key={state.Id} value={state.Id}>
											{state.Value}
										</option>
									))}
								</select>
								</div>
								<div>
								{districts.length > 0 && (
									
							<select onChange={ handleSelectDistrict}  style={{ width: '97%', height:'45px',
							background: '#f4f4f4', marginBottom: '10px' }}>
										{districts.map((dist) => (
											<option key={dist.Id} value={dist.Id}>
												{dist.Value}
											</option>
										))}
									</select>
								)}
								 <div className="loader"> {isLoading && ( <ThreeDots color="#00BFFF" height={80} width={80} />)}</div>
								</div>
								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text " id="basic-addon1"><i
												className="fa fa-building"></i></span>
										</div>
										<input type="text" name='Grandfather' value={city}
											onChange={(e) => setCity(e.target.value)} className="form-control"
											placeholder="City" required />
									</div>
								</div>
								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text " id="basic-addon1"><i
												className="fa fa-map-marker"></i></span>
										</div>
										<input type="text" value={pinCode} onChange={(e) => setPinCode(e.target.value)}
											className="form-control" placeholder="PinCode" required />
									</div>
								</div>
								<div className="modal-footer text-center">
									<button type="button" onClick={Submit} className="btn gradient" data-toggle="tooltip"
										data-placement="top"
										title="Congrats! Even your names look great together.">Submit</button>
								</div>
							</div>
						</div>

					</form>
				</div>
			</div>
			</div>
  )}
 {isSuccess && <Confirm_Details  address={address} city={city} pinCode={pinCode} stateId={stateId} districtId={districtId} />} 
		</>
	)
}
export default Event_Place