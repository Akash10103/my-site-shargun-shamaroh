import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { API_BASE_URL, API_PROXY_URL } from './Config';
import { useNavigate } from 'react-router-dom';
function Footer() {
 const history = useNavigate()
	// Login
	const [Name, setName] = useState("")
	const [Password, setPassword] = useState("")
	
   
async function login(e) {
	if(Name==="")
{
	alert("please Enter Ur Email")
}
else if(Password==="")
{
	alert("please enter ur password")
}
else
{
		e.preventDefault()
		const item = { "Name":Name, 
		               "Password":Password }
		//console.log(item)

        //Craete Token By Email and Password
		const corsProxyUrl = API_PROXY_URL;
    const apiUrl = API_BASE_URL+'CreateToken?method=Login&deviceType=Web';
		let result=	await fetch(corsProxyUrl + apiUrl,{
			      method:'GET',
				  headers:{
					'Email': item.Name,
					'Password': item.Password,
					'Content-Type': 'application/json',
					"Accept": 'application/json'
				  }
			})
				 result=  await result.json();	

				 let Token = result.token;
				 let Message = result.message;
				 
				 if(Token!=null){
					//console.log(Token);

					//Login With token and email
					const corsProxyUrl = API_PROXY_URL;
    const apiUrl = API_BASE_URL+'GETLOGIN';
		let result=	await fetch(corsProxyUrl + apiUrl,{
			      method:'POST',
				  headers:{
					'Email': item.Name,
					'Password': item.Password,
					"Authorization": 'Basic c3NfbG9naW46U2hAZ3Vuc0BtQHJvaF9Mb2c=',
					'Token': Token,
					'Method':'Login',
					'DeviceType': 'Web',
					'Content-Type': 'application/json',
					"Accept": 'application/json'
				  }
			})
			 result=  await result.json();	
				 //var Token = result.token;
				 let Message = result.message;
				 let userId = result.UserId;
				 //console.log(result);

				 //Create UserId  By Token
				 if(userId!=0){
					const corsProxyUrl = API_PROXY_URL;
					const apiUrl =  API_BASE_URL+"CreateTokenByUserId?method=Login&deviceType=Web";
						let result=	await fetch(corsProxyUrl + apiUrl,{
								  method:'GET',
								  headers:{
									"UserId": userId,
									'Content-Type': 'application/json',
									"Accept": 'application/json'
								  }
							})
								 result=  await result.json();	
								 let UserToken = result.token
								 
								 //console.log(result);

								 if(UserToken!=null){
									//user id or user token save in session
									sessionStorage.setItem('UserToken',UserToken );
									sessionStorage.setItem('UserId',userId );
									const UserId = sessionStorage.getItem('UserId');
									const accessToken = sessionStorage.getItem('UserToken');
									const isLoggedIn = !!sessionStorage.getItem('UserToken');
									//sessionStorage.removeItem('UserToken');
									// let userId = result.UserId;
									console.log(accessToken, UserId);

									//GetUser Detials By UserId
					const corsProxyUrl = API_PROXY_URL;
				const apiUrl = API_BASE_URL+'GETTOKENBYID';
					let result=	await fetch(corsProxyUrl + apiUrl,{
							method:'GET',
							headers:{
								"UserId": userId,
								"Authorization": 'Basic c3NfZ2V0VG9rZW5CeUlkOlNoQGd1bnNAbUByb2hfZ2V0VG9rZW5CeUlk',
								'Token': UserToken,
								'Method':'GetTokenById',
								'DeviceType': 'Web',
								'Content-Type': 'application/json',
								"Accept": 'application/json'
							}
						})
			result=  await result.json();	
				 var StepDone = result.StepDone;
				 var EventTypeId = result.EventTypeId;

				 //Step Check
				 if(StepDone=="Step-1")
									{
										//Select Event
										history.push('/birthday-wedding');
									}
									else if(StepDone=="Step-2"){
										if(EventTypeId=="1"){
											//Groom Bride Deials
											history.push('/groom-wedding');
										}
										else{	
											//Birdthay Details 
											history.push('/persnal-detail');
										}
									}
									else{
										//Main Activity
									}

									
								 }
								 else{
									console.log(Message);
									alert(Message)
								 }
				
				 }				
				 
				 else{
					console.log(Message);
					alert(Message)
				 }
                   
				 }
				 else{
					console.log(Message);
					alert(Message)
				 }
		 }
		}
		

		//  useEffect(()=>{
		// 	window.setItem('name', Name);
		// 	window.setItem('password', Password);
		// }, [Name, Password]);	

	return (
		<div>

			<footer className="site-footer">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-3 col-sm-6 col-6">
								<div className="widget widget-list">
									<h5 className="widget-title">About Us</h5>
									<ul>
										<li><Link to="about-us.html">About Us</Link></li>
										<li><Link to="pressandmedia.html">Press And Media</Link></li>
										<li><Link to="javascript:void(0);">info@example.com</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-6">
								<div className="widget widget-list">
									<h5 className="widget-title">For Couples</h5>
									<ul>
										<li><Link to="wedding-planning-tools.html">Manager Tools</Link></li>
										<li><Link to="wedding-suppliers.html">Wedding Suppliers</Link></li>
										<li><Link to="wedding-ideas-inspiration.html">Ideas Inspiration</Link></li>
										<li><Link to="wedding-gift-lists.html">Wedding Gift Lists</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6  col-6">
								<div className="widget widget-list">
									<h5 className="widget-title">For Business</h5>
									<ul>
										<li><Link to="index-business.html">Business</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-6">
								<div className="widget widget-app">
									<h5 className="widget-title">GET THE APP</h5>
									<img src="assets/images/app1.jpg" alt="" />
									<img src="assets/images/app2.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<span className="copyright">Shargun Samaroh  </span>
							</div>
							<div className="col-lg-6">
								<ul className="footer-list">
									<li><Link to="cookie-policy.html">Cookie Policy</Link></li>
									<li><Link to="privacy-policy.html">Privacy Policy</Link></li>
									<li><Link to="terms.html">Terms & Conditions</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>

			login
			<div className="modal fade my-account-bx" id="login" tabIndex="-1" role="dialog" aria-labelledby="login" aria-hidden="true">
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<h2 className="title">Login Your Account</h2>
						<div action="my-account.html">
						{/* <div className="form-group"> */}
							<div className="form-group">
								<input type="email" className="form-control"
									placeholder="Email Address"
									name='email'
									onChange={(e) => setName(e.target.value)}
									value={Name} />
								{/* {errors.log && <p className='errors'>{errors.log}</p>} */}
							</div>
							<div className="form-group">
								<input type="password" className="form-control"
									placeholder="Password"
									name='password'
									onChange={(e) => setPassword(e.target.value)}
									value={Password} />
								{/* {errors.paslog && <p className='errors'>{errors.paslog}</p>} */}

								<div className="reset-password">
									<Link className="btn-link collapsed" data-toggle="collapse" to="#reset-password" role="button" aria-expanded="false" aria-controls="reset-password">Reset password?</Link>
								</div>
							</div>
							<div className="form-group">
								<button onClick={login} type="submit" className="btn btn-block gradient">Login</button>
							</div>

						</div>
					</div>
					<div className="modal-content collapse reset-password" id="reset-password">
						<h2 className="title">Reset password?</h2>
						<form>
							<div className="form-group password-icon-bx">
								<i className="fa fa-lock"></i>
								<p>Enter your email address associated with your account, and we'll email you a link to reset your password...</p>
							</div>
							<div className="form-group">
								<input type="email" className="form-control" placeholder="Enter email address" />
							</div>
							<div className="form-group">
								<button type="submit" className="btn btn-block gradient">Send reset link</button>
							</div>
							<div className="sign-text">

								<span className=""><Link data-toggle="collapse" to="#reset-password" role="button" aria-expanded="false" aria-controls="reset-password">Back</Link></span>
							</div>
						</form>
					</div>
				</div>
			</div>



		</div>

	)
}

export default Footer
// let result=	await fetch('https://api.shagunsamaroh.com/api/GETLOGIN',{
// 			      method:'POST',
// 				  body:JSON.stringify(item),
// 				  headers:{
// 					'Email': Name,
// 					'Password': Password,
// 					'Token': 'cW5wZm01UGY=',
// 					'Method': 'Login',
// 					'DeviceType': 'Mobile',
// 					'Authorization': 'Basic c3NfbG9naW46U2hAZ3Vuc0BtQHJvaF9Mb2c='
// 				  }