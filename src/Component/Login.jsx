import React, { useState } from 'react'

function Login() {
	const [email, setEmail]=useState("")
	const [password, setPass]=useState("")
	function Log(){
		console.warn(email,password)
		let item ={email, password}
		
	}
  return (
    <div>
<div className="section-full content-inner bg-gray">
		<div className="container">
			<div className="row column-reverse">
				<div className="col-lg-9 col-md-8 ">
					<div className="register-content">
						<div className="modal-content">
							<h2 className="title">Login Your Account</h2>
							<form action="my-account.html">
								<div className="form-group">
			<input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" placeholder="Email Address" />
								</div>
								<div className="form-group">
			<input value={password} onChange={(e)=>setPass(e.target.value)} type="password" className="form-control" placeholder="Password" />
									<div className="reset-password">
										<a className="btn-link collapsed" data-toggle="collapse" href="#reset-password" role="button" aria-expanded="false" aria-controls="reset-password">Reset password?</a>
									</div>
								</div>
								<div className="form-group">
											<button type="submit" onClick={Log} className="btn btn-block gradient">Login</button>
										</div>
										<div className="form-group">
											<a href="my-account.html" className="btn facebook btn-block"><i className="fa fa-facebook m-r10"></i> Log in with Facebook</a>
										</div>
										<div className="form-group">
											<a href="my-account.html" className="btn google-plus btn-block"><i className="fa fa-google m-r10"></i>Log in with Google</a>
										</div>
			                    	<span className="">Don't have a Wedding Manager account? <a href="signup.html">Sign up</a></span>
									</form>
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
										<span className=""><a data-toggle="collapse" href="#reset-password" role="button" aria-expanded="false" aria-controls="reset-password">Back</a></span>
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 m-b30">
							<div className="pages-bx">
								<ul className="side-page-bx">
									<li><a href="about-us.html">About Us</a></li>
									<li><a href="cookie-policy.html">Cookie Policy</a></li>
									<li><a href="pressandmedia.html">Press And Media</a></li>
									<li><a href="privacy-policy.html">Privacy Policy</a></li>
									<li><a href="terms.html">Terms</a></li>
									<li><a href="wedding-planning-tools.html">Wedding Manager Tools</a></li>
									<li><a href="wedding-gift-lists.html">Wedding Gift Lists</a></li>
									<li className="active"><a href="login.html">Login</a></li>
									<li><a href="signup.html">Register</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Login
