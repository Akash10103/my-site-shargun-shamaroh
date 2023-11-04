import React, {createContext, useContext, useEffect,  useState} from 'react'
import Event_Place from './Event_Place'
import { MyContext } from './Groom_Bride'
import { API_BASE_URL, API_PROXY_URL } from './Config';
export const MyContextshare = createContext({ eventTypeId: "",EventId: "",  });
function Personal_details() {
	const {Event} = useContext(MyContext)
	
	

	const [Name, setName]=useState("")
	const [NameError, setNameError]=useState("")

	const [Nick, setNick]=useState("")
	const [NickError, setNickError]=useState("")

	 const [Date, setDate]=useState("")
	 const [DateError, setDateError]=useState("")

	  const [Fathername, setFathername]=useState("")
	  const [FathernameError, setFathernameError]=useState("")

	   const [Mothername, setMothername]=useState("")
	   const [MothernameError, setMothernameError]=useState("")

	   const [Grandfather, setGrandfather]=useState("")
	   const [GrandfatherError, setGrandfatherError]=useState("")

	   const [Grandmother, setGrandmother]=useState("")
	   const [GrandmotherError, setGrandmotherError]=useState("")

	   const [isSuccess, setisSuccess] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(true);

	const [eventTypeId, setEventTypeId] = useState('');
	const [EventId, setEventId] = useState('');
	
	useEffect(() => {
		if(eventTypeId != 1){
		const corsProxyUrl = API_PROXY_URL;
		const apiUrl = API_BASE_URL + 'GETTOKENBYID';
		fetch(corsProxyUrl + apiUrl,
			{
				method: 'GET',
				headers: {
				'Method': 'GetTokenById',
				'UserId':  sessionStorage.getItem('UserId'),
				'Token':  sessionStorage.getItem('UserToken'),
				'DeviceType': 'web',
				'Authorization': 'Basic c3NfZ2V0VG9rZW5CeUlkOlNoQGd1bnNAbUByb2hfZ2V0VG9rZW5CeUlk'
				}
			})
			.then(response => response.json())
			.then(response => {
				setEventId(response.EventId);
				setEventTypeId(response.EventTypeId);
			
			})
			.catch(error => console.error(error))
		}
	}, [eventTypeId]);

	// const navigate = useNavigate() 
	 function Singuppp(e){
		e.preventDefault()
		if(Name.length>0){
		}else{
			setNameError (true);
		}
		if(Nick.length>0){
		}else{
			setNickError(true);
		}
		if(Date.length>0){
		}else{
			setDateError(true)
		}
		if(Fathername.length >0){
		}else{
			setFathernameError (true)
		}  
		if(Mothername.length >0){
		}else{
			setMothernameError(true)
		}  
		if(Grandfather.length >0){
		}else{
			setGrandfatherError(true)
		} 
		if(Grandmother.length>0){
		    var formData   = {
				name: Name,
				nick: Nick,
				date: Date,
				fathername: Fathername,
				mothername: Mothername,
				grandfather: Grandfather,
				grandmother: Grandmother
			}
			console.log(formData);
			setIsDisplayed(false);
			setisSuccess(true);
			if(eventTypeId == 1){
				console.log("eventTypeId:" +eventTypeId , 'Groombride:' +Event, 'EventId' +EventId)
			}
			else{
				console.log(eventTypeId)
				console.log(EventId)
			}
		}else{
			setGrandmotherError (true);
		}   
		
	}
	
  return (
    <>
	{isDisplayed  && (
				<div>
		<div className="" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModal">
   			<div className="modal-dialog" role="document" style={{
				                  backgroundColor: "pink",
							display:'flex',
							alignItems:'center',
							justifyContent: 'space-between'
						}} >
    <form className="modal-content start-planning " id="ProfileStep2" style={{
				                  backgroundColor: "pink",
							display:'flex',
							justifyContent: 'space-between'}}>
				{/* <div className="planroll-imgbx" >
					<img src='assets/images/part.png' alt='' />
				</div> */}
				<div className="start-here-bx">
					<div className="">
						<div className="planroll-title">
			<h5 className="title"style={{marginTop:'2px'}}>Please fill your basic information...?</h5>
						</div>

						<div className="form-group"  >
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text " id="basic-addon1"><i className="fa fa-user"></i></span>
								</div>
				<input type="text"  value={Name} name='Name'
				 onChange={(e)=>{
					setName(e.target.value)
					setNameError(false)
				}} 
				  className="form-control" placeholder="User Name" />
							</div>
							{NameError && <p className='red'>Please Enter your Name</p>}
						</div>

						<div className="form-group"  >
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text " id="basic-addon1"><i className="fa fa-user"></i></span>
								</div>
								<input type="text"  value={Nick} name='Nick'
								 onChange={(e)=>{
									setNick(e.target.value)
									setNickError(false)
								}}
								  className="form-control" placeholder="Nick Name" />
							</div>
							{NickError && <p className='red'>Please Enter Nick Name</p>}
						</div>
                        <div className="form-group"  >
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text " id="basic-addon1"><i className="fa fa-calendar"></i></span>
								</div>
								<input type="date"  name="dob"  value={Date}
								 onChange={(e)=>{
									setDate(e.target.value)
									setDateError(false)
								}} 
								 className="form-control" placeholder="Date of Birth"  />
							</div>
							{DateError && <p className='red'>fill your Date of Birth</p>}
						</div>

                        <div className="form-group"  >
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text " id="basic-addon1"><i className="fa fa-user"></i></span>
								</div>
								<input type="text" name='Fathername' 
								value={Fathername}
								 onChange={(e)=>{
									setFathername(e.target.value)
									setFathernameError(false)
								}}
								  className="form-control" placeholder="Fathers Name" />
							</div>
							{FathernameError && <p className='red'>Please Enter your Father Name</p>}
						</div>

                        <div className="form-group"  >
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text " id="basic-addon1"><i className="fa fa-user"></i></span>
								</div>
								<input type="text"  name='Mothername' value={Mothername}
								 onChange={(e)=>{
									setMothername(e.target.value)
									setMothernameError(false)
									}}  className="form-control" placeholder="Mothers Name" />
							</div>
							{MothernameError && <p className='red'>Please Enter your Mother Name</p>}
						</div>

                        <div className="form-group"  >
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text " id="basic-addon1"><i className="fa fa-user"></i></span>
								</div>
								<input type="text"  name='Grandfather' value={Grandfather}
								 onChange={(e)=>{
									setGrandfather(e.target.value)
									setGrandfatherError(false)
								}}
								   className="form-control" placeholder="Grand Father Name" />
							</div>
							{GrandfatherError && <p className='red'>Please Enter Grand father Name</p>}
						</div>
                      

						<div className="form-group"  >
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text " id="basic-addon1"><i className="fa fa-user"></i></span>
								</div>
								<input type="text"  value={Grandmother} 
								onChange={(e)=>{
									setGrandmother(e.target.value)
									setGrandmotherError(false)
									}} className="form-control" placeholder="Grand Mother Name" />
							</div>
							{GrandmotherError && <p className='red'>Please Enter your Grand mother Name</p>}
						</div>
						<div className="modal-footer text-center">
							<button type="button" onClick={Singuppp} className="btn gradient" data-toggle="tooltip" data-placement="top" title="Congrats! Even your names look great together.">Next</button>
						</div>
					</div>
				</div>

			</form>
			</div>
			</div>
			</div>
  )}
 
 <MyContextshare.Provider value={{ Event, EventId, eventTypeId,  Name,Nick,Date,Fathername, Mothername, Grandfather, Grandmother, }}>
 {isSuccess && <Event_Place />} 
 </MyContextshare.Provider>
    </>
  )
}

export default  Personal_details