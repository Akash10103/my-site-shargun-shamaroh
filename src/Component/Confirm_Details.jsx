import React, { useState,  useContext } from 'react'
import { API_BASE_URL, API_PROXY_URL } from './Config';
import Groom_Bride, { MyContext } from './Groom_Bride';
import { MyContextshare,  } from './Personal_details';
import { useNavigate } from 'react-router-dom';

// stle1.css    

function Confirm_Details(props) {
  let format ;
  const { eventTypeId , EventId} = useContext(MyContextshare)
  const { Event} = useContext(MyContext)
  const {  address, city, pinCode, stateId, districtId } = props;
  const { Name,Nick,Date,Fathername, Mothername, Grandfather, Grandmother,}= useContext(MyContextshare)
  
  const [Mobile, setMobile] = useState("");
  const [MobileError, setMobileError] = useState(false);
  

  const [Email, setEmail] = useState("");
  const [EmailEroor, setEmailError] = useState(false);

  const [Password, setPassword] = useState("");
  const [PasswordError, setPasswordError] = useState(false);

  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [ConfirmPasswordError, setConfirmPasswordError] = useState(false);

  const [ isSuccess, setisSuccess]=useState(false)
	const [isDisplayed, setIsDisplayed]= useState(true)
 

const navigate= useNavigate()
  function SubmitForm(e) {
    e.preventDefault();
  
    if (Mobile.length > 0) {
    } else {
      setMobileError(true)
    }
    if (Email.length > 0 && Email.includes('@')) {
    } else {
      setEmailError(true)
    }
    if (Password.length > 0) {
    } else {
      setPasswordError(true)
    }
    if (ConfirmPassword.length > 0) {
    } else {
      setConfirmPasswordError(true)
    }
    if (Password !== ConfirmPassword) {
      alert("password not match")
    }
    else if (Mobile && Email && Password && ConfirmPassword) {
    format = {
      mobile: Mobile,
      email: Email,
      password: Password,
      confirm: ConfirmPassword
    }
    console.log(format);
    // console.log("mobile:"+format.mobile);
  } else {
    alert("Some variables are empty.");
  }
  if(eventTypeId==1){
    const corsProxyUrl = API_PROXY_URL;
		const apiUrl = API_BASE_URL + 'WeddingEventRegistration';
    fetch(corsProxyUrl + apiUrl, {
  method: 'POST',
  headers: {
    'DeviceType': 'Web',
    "UserId": sessionStorage.getItem('UserId'),
    "Token": sessionStorage.getItem('UserToken'),
    'Method': 'WeddingEventRegister',
    'Content-Type': 'application/json',
    'Authorization': 'Basic c3Nfd2VkZGluZ0V2ZW50UmVnaXN0cmF0aW9uOlNoQGd1bnNAbUByb2hfV2VkZGluZ0V2ZW50UmVn'
  },
  body: JSON.stringify({
    "Address": address,
    "CityId": "0",
    "ConfirmPassword": format.confirm,
    "DistrictId": districtId,
    "DOB": Date,
    "EmailId": format.email,
    "EventId": EventId,
    "FatherName": Fathername,
    "Gender":Event,
    "GrandFatherName":Grandfather,
    "GrandMotherName":  Grandmother,
    "MobileNo": format.mobile,
    "MotherName": Mothername,
    "Name": Name,
    "NickName": Nick,
    "otherCity": "",
    "Password": format.password,
    "PinCode": pinCode,
    "StateIdResponse": stateId,
    "UserId": sessionStorage.getItem('UserId')
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

  setIsDisplayed(false);
  setisSuccess(true);
  }
	else if(eventTypeId == 2){
		setIsDisplayed(false)
		navigate('/dasboard-page');
    const corsProxyUrl = API_PROXY_URL;
		const apiUrl = API_BASE_URL + 'AddNewBirthdayEvent';
    fetch(corsProxyUrl + apiUrl, {
  method: 'POST',
  headers: {
    "UserId": sessionStorage.getItem('UserId'),
    "Token": sessionStorage.getItem('UserToken'),
    'Method': 'ShowStopperReg',
    'DeviceType': 'web',
    'Content-Type': 'application/json',
    'Authorization': 'Basic c3NfU2hvd1N0b3BwZXJSZWc6U2hAZ3Vuc0BtQHJvaF9TaG93U3RvcHBlclJlZw=='
  },
  body: JSON.stringify({
    "Address": address,
    "CityId": "0",
    "ConfirmPassword": format.confirm,
    "DistrictId": districtId,
    "DOB": Date,
    "EmailId": format.email,
    "EventId": EventId,
    "FatherName": Fathername,
    "Gender":Event,
    "GrandFatherName":Grandfather,
    "GrandMotherName":  Grandmother,
    "MobileNo": format.mobile,
    "MotherName": Mothername,
    "Name": Name,
    "NickName": Nick,
    "otherCity": "",
    "Password": format.password,
    "PinCode": pinCode,
    "StateIdResponse": stateId,
    "UserId": sessionStorage.getItem('UserId')
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
    console.log("this is 2")
    
  }
  else {

  }

  const A=({ Name, Nick, Date, Fathername, Mothername, Grandfather, Grandmother})
  const B=({eventTypeId , Event, EventId})
  const C=({city, address, pinCode, stateId, districtId}) 
console.log(A)
console.log(B)
console.log(C)
  }
  return (
    <>
    {isDisplayed  && (
				<div>
      <div className="" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModal" >
        {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> */}
        <div className="modal-dialog" role="document" style={{
          backgroundColor: "pink",
          display: 'flex',
          alignItems: 'center',                                                                           
          justifyContent: 'space-between'

        }} >
          {/* <div className="modal-content"> */}
          <form onSubmit={SubmitForm} className="modal-content start-planning " id="ProfileStep2" style={{
            backgroundColor: "pink",
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <div className="planroll-imgbx" >
              <img src='assets/images/confirm.png' alt='' />
            </div>
            <div className="start-here-bx">
              <div className="">
                <div className="planroll-title">
                  <h5 className="title"> Enter your Confirmation details ....</h5>
                </div>
                <div className="form-group"  >
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text " id="basic-addon1"><i className="fa fa-mobile"></i></span>
                    </div>
                    <input className='form-control'
                      type="Mobile"
                      onChange={(e) => {
                        setMobile(e.target.value)
                        setMobileError(false)
                      }}
                      name='Mobile'
                      placeholder='Mobile'
                      value={Mobile} />
                  </div>
                  {MobileError && <p className='red' >Enter your mobile</p>}
                </div>
                <div className="form-group"  >
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text " id="basic-addon1"><i className="fa fa-envelope-o"></i></span>
                    </div>
                    <input className='form-control'
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setEmailError(false)
                      }}
                      name='Email'
                      placeholder='Email'
                      value={Email} />
                  </div>
                  {EmailEroor && <p className='red'>Enter your Email</p>}
                </div>
                <div className="form-group"  >
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text " id="basic-addon1"><i className="fa fa-key"></i></span>
                    </div>
                    <input className='form-control' type="Password"
                      onChange={(e) => {
                        setPassword(e.target.value)
                        setPasswordError(false)
                      }}
                      name='Password'
                      placeholder='Password' value={Password} />
                  </div>
                  {PasswordError && <p className='red'>Enter your password</p>}
                </div>
                <div className="form-group"  >
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text " id="basic-addon1"><i className="fa fa-check-circle-o"></i></span>
                    </div>
                    <input className='form-control'
                      type="Password"
                      onChange={(e) => {
                        setConfirmPassword(e.target.value)
                        setConfirmPasswordError(false)
                      }}
                      name='ConfirmPassword'
                      placeholder='Confirm Password'
                      value={ConfirmPassword} />
                  </div>
                  {ConfirmPasswordError && <p className='red'>Enter your confirm password</p>}
                </div>
                <div className="modal-footer text-center">
                  <button type="submit" className="btn gradient" data-toggle="tooltip" data-placement="top" title="Congrats! Even your names look great together.">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
  )}
 {isSuccess && <Groom_Bride/>} 

    </>
  )
}

export default Confirm_Details



