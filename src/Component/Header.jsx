import React, { createContext, useState } from 'react';

import { API_BASE_URL, API_PROXY_URL } from './Config';

import BirthdayOrWedding from './BirthdayOrWedding';
import { ThreeDots } from 'react-loader-spinner';
export const UserContext = createContext();
function Header() {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Password, setPassword] = useState("");
    const [gender, setGender] = useState('');
    const [isSuccess, setisSuccess] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(true);
    const [isLoading, setIsLoading] = useState(false);              
    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
    };

    const corsProxyUrl = API_PROXY_URL;
    const apiUrl = API_BASE_URL + "Registration";

    async function Singup(event) {
        setIsLoading(true);
        if (Name === "") {
            alert("please enter name");
            setIsLoading(false);
        }
        else if (Mobile === "") {
            alert("Please Enter mobile");
            setIsLoading(false);
        }
        else if (Password === "") {
            alert("Enter ur Password");
            setIsLoading(false);
        }
        else if (Email === "") {
            alert("Please Enter email");
            setIsLoading(false);
        }
        else {
            event.preventDefault();
            let item1 = { Mobile, Email, Password, Name, gender };
            console.log(item1);

            let result = await fetch(corsProxyUrl + apiUrl, {
                method: 'POST',
                body: JSON.stringify(item1),
                headers: {
                    "Content-Type": 'application/json',
                    'Method': 'Register',
                    'Authorization': 'Basic c3NfcmVnaXN0cmF0aW9uOlNoQGd1bnNAbUByb2hfUmVn',
                    "Accept": 'application/json'
                }
            });

            result = await result.json();
            console.log(result);
            let userId = result.UserId;
            if (userId !== '0') {

                const corsProxyUrl = API_PROXY_URL;
                const apiUrl = API_BASE_URL + "CreateTokenByUserId?method=Login&deviceType=Web";
                let result = await fetch(corsProxyUrl + apiUrl, {
                    method: 'GET',
                    headers: {
                        "UserId": userId,
                        'Content-Type': 'application/json',
                        "Accept": 'application/json'
                    }
                })
                result = await result.json();
             
                let UserToken = result.token;
                let Message = result.message;

                if (UserToken != null) {
                    sessionStorage.setItem('UserToken', UserToken);
                    sessionStorage.setItem('UserId', userId);
                    const UserId = sessionStorage.getItem('UserId');
                    const accessToken = sessionStorage.getItem('UserToken');
                    const isLoggedIn = !!sessionStorage.getItem('UserToken');
                    console.log(accessToken, UserId);
                     setIsDisplayed(false);
                     setisSuccess(true);
                     setIsLoading(false);
                }
                else {
                    console.log(Message);
                }
            } else {
                //   setIsLoading(false);
                alert('Email or Phone already register')
            }
        }
    }
    return (
        <>
            <header className="site-header header-transparent mo-left">
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix ">
                        <div className="container-fluid clearfix">
                            <div className="logo-header mostion">
         <a className="header-logo1" href="index.html"><img src="assets/images/logo-white-1.png" alt="" /></a>
                                <a className="header-logo2" href="index.html"><img src="assets/images/logo-black-1.png" alt="" /></a>
                            </div>
                            <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

                            <div className="extra-nav">
                                <div className="extra-cell home-sign">
                                    {/* <a href="index-business.html" className="btn gradient radius-sm"><span>Business login</span><i className="la la-industry"></i></a> */}
                                    <a href="javascript:void(0);" className="btn purple gradient radius-sm m-l10" data-toggle="modal" data-target="#signup"><span>Sign Up</span> <i className="la la-user-plus"></i></a>
                                    <a href="javascript:void(0);" className="btn green gradient radius-sm m-l10" data-toggle="modal" data-target="#login"><span>login</span> <i className="la la-sign-in"></i></a>
                                </div>
                            </div>
                            <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                                <div className="logo-header mostion">
                                    <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                                </div>
                                <div className="home-sign">
                                    <div><a href="javascript:void(0);" className="btn gradient purple" data-toggle="modal" data-target="#signup"><span>Sign Up</span> <i className="la la-user-plus"></i></a></div>
                                    <div><a href="javascript:void(0);" className="btn gradient green" data-toggle="modal" data-target="#login"><span>login</span> <i className="la la-sign-in"></i></a></div>
                                </div>
                                <div className="nav-footer">
                                    <ul className="nav-social">
                                        <li><a href="#" className="fa fa-facebook"></a></li>
                                        <li><a href="#" className="fa fa-google"></a></li>
                                        <li><a href="#" className="fa fa-twitter"></a></li>
                                    </ul>
                                    <p>© Welcome 2023 shagun Samahroh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>

            {/* singup start */}
            <div className="modal fade my-account-bx" id="signup" tabIndex="-1" role="dialog" aria-labelledby="signup" aria-hidden="true">
                <div className="modal-dialog" role="document"  >
                {isDisplayed  && (
                       <div>
                    <div className="modal-content">
                        <h2 className="title">Create an account</h2>                        
                        <div className="form-group">
          <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name"  name='Name'required />
                        </div>
                        <div className="form-group">
         <input type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" name='email' required />
                        </div>

                        <div className="form-group">
             <input type="Mobile" value={Mobile} onChange={(e)=>setMobile(e.target.value)} className="form-control" placeholder="Mobile" name='Mobile' required />
                        </div>

                        <div className="form-group">
              <input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" name='password' required />
                        </div>
                        <div className="gender-image-selector" style={{textAlign:'center'}} >
      <button className={`btnGender ${gender === 'M' ? 'btnGenderselected' : ''}`} onClick={() => handleGenderSelect('M')}>
        <img src='../assets/images/boy.png' alt="M" />
      </button>
      <button className={`btnGender ${gender === 'F' ? 'btnGenderselected' : ''}`} onClick={() => handleGenderSelect('F')}>
        <img src='../assets/images/girl.png' alt="F" />
      </button>
                        </div>
                        
                        <div style={{ display: "flex", justifyContent: "center" }} className="form-group">
                            <button type="submit"   onClick={Singup} className="btn btn-block gradient">Sign up</button>
             <div className="loader"> {isLoading && ( <ThreeDots color="#00BFFF" height={80} width={80} />)}</div>
                        </div>
                        </div>
                        </div>
                        )}
                       
                        <UserContext.Provider value={{ Name, gender }}>
                        { isSuccess  && <BirthdayOrWedding /> } 
                      </UserContext.Provider>
                       
                </div>
            </div>
        </>
    )
}

export default Header;

