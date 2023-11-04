import React, { useContext, useEffect, useState } from 'react'
import { API_BASE_URL, API_PROXY_URL } from './Config';
import { Link, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import Sidenavbar from '../Sidenavbar/Sidenavbar';
import { MyContextshare } from './Personal_details';
export default function Mydashboard() {
	const {eventTypeId} = useContext(MyContextshare)
	const [BRIDE, setBRIDE] = useState('');
	const [GROOM, setGROOM] = useState('');
	const [time, setTime] = useState('');
	const [isSuccess, setisSuccess] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(true);
//  let auth = JSON.parse(sessionStorage.getItem('UserId'))
//  console.log(auth); 
	console.log( eventTypeId )
useEffect(()=>{
		const corsProxyUrl = API_PROXY_URL;
		const apiUrl = API_BASE_URL + 'WeddingInvByUserId';
		fetch(corsProxyUrl + apiUrl, {
			method: 'GET',
			headers: {
				"UserId": sessionStorage.getItem('UserId'),
				"Token": sessionStorage.getItem('UserToken'),
				'DeviceType': 'web',
                'Method': 'EventRegister'
			}
		})
			.then(response => response.json())
			.then(response => {
				  console.log(response)
			 setBRIDE(response.Bridename);
            setGROOM(response.Groomname);
            setTime(response.Event_date);
			console.log(response.EventType)												
			})
		},[])
	function Logout(){
		sessionStorage.clear();
      console.log("Logout called")
	  setIsDisplayed(false);
	  setisSuccess(true);
	}
	
  return (
    <>
	{isDisplayed  && (
                       <div>
<div className="page-wraper"  >
	
    <header className="site-header header-transparent mo-left">
	
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
            <div className="main-bar clearfix ">
                <div className="container-fluid clearfix">
                
                    <div className="logo-header mostion">
						<a className="header-logo1" href="index.html"><img src="/assetsimages/logo-white-1.png" alt=""/></a>
						<a className="header-logo2" href="index.html"><img src="/assets/images/logo-black-1.png" alt=""/></a>
					</div>
            
                    <div className="extra-nav">
                        <div className="extra-cell">
							<a href="#" className="btn gradient openbtn"><span>Your Wedding Manager </span><i className="fa fa-bars"></i></a>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
		<div id="mySidenav" className="sidenav right-nav">
			
			<a href="javascript:void(0)" className="closebtn menu-close"><i className="ti-close"></i></a>
			<ul className="">
				<li><Link to="/profile"><i className="la la-home"></i>profile</Link>  </li>
				<li><Link to="/accounts"><i className="la la-user"></i>Account</Link>  </li>
				<li><Link to="/upcoming-events"><i className="la la-archive"></i>Upcoming Events</Link></li>
				<li><Link to="/add-events"><i className="la la-align-left"></i>Add Events</Link></li>
				<li><Link to="/share"><i className="la la-share"></i>Share</Link></li>
				<li><a href="settings.html"><i className="la la-cog"></i>Settings</a></li>
				<li>
				<button  className='btn btn-succes'  onClick={Logout}>Logout</button>
				</li>
			</ul>
		</div>

    </header>
    
    <div className="page-content bg-white">

		<div className="dlab-bnr-inr text-center dlab-bnr-inr-sm overlay-black-dark" style={{backgroundImage:'assets/images/main-slider/slide1.jpg; backgroundSize: cover;" id="app-banner'}}>
            <div className="container">
                <div className="dlab-bnr-inr-entry align-m dlab-home">
					<div className="bnr-content">
						<div className="wedding-details">
							<div className="wedding-info wedding-info-left">
								<h2 className="wedding-name">{BRIDE}</h2>
								<div className="wedding-img"><img src="/assets/images/groooom.png" alt=""/></div>
							</div>
							<div className="wedding-heart">
								<i className="fa fa-heart"></i>
							</div>
							<div className="wedding-info wedding-info-right">
								<div className="wedding-img"><img src="/assets/images/brideee.png" alt=""/></div>
								<h2 className="wedding-name">{GROOM}</h2>
							</div>
						</div>
						<div className="wedding-location">
							<a href="javascript:;" data-toggle="modal" data-target="#exampleModal" className="location-name"></a>
							<p className="location-info">{time}</p>
						</div>
					</div>
				</div>
            </div>
		
			<div className="search-filter">
				<div className="container">
					<form className="filter-form" action="wedding-venues-search.html">
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-6 col-6">
								<select className='form-control'>
									<option>We’re looking for</option>
									<option>Photographers</option>
									<option>Florists</option>
									<option>Videographers</option>
									<option>Catering</option>
									<option>Wedding Dress and Accessories</option>
									<option>Music</option>
									<option>Entertainment</option>
									<option>Cakes</option>
									<option>Stationery</option>
									<option>Beauty, Hair and Make-Up</option>
									<option>Menswear</option>
									<option>Wedding Rings and Jewellery</option>
									<option>Transport</option>
									<option>Decoration and Hire</option>
									<option>Planners, Toastmasters and Celebrants</option>
									<option>Marquee Hire</option>
								</select>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-6">
								<input type="text" className="form-control search" placeholder="Near"/>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-6 col-6">
					<input type="text" className="form-control" placeholder="Or Called"id="datepicker"/>
							</div>
							<div className="col-lg-2 col-md-2 col-sm-6 col-6 d-flex">
								<button className="btn btn-block gradient text-uppercase"> Search</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		
        </div>
	
		<div className="section-full bg-white plan-tools-bx">
			<div className="container">
				<ul className="plan-tools-list">
					<li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
						<a href="my-account.html" className="list-box home-list active">
							<h6 className="title"><i className="la la-home"></i>Home</h6>
							<p>150 days to go</p>
						</a>
					</li>
					<li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<a href="planner-guest-list.html" className="list-box guest-list">
							<h6 className="title"><i className="la la-user"></i>Guest List</h6>
							<p>4 invited</p>
						</a>
					</li>
					<li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
						<a href="planner-budget-select.html" className="list-box budget-list">
							<h6 className="title"><i className="la la-money"></i>Budget</h6>
							<p>100% Remaining</p>
						</a>
					</li>
					<li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<a href="planner-checklist-select-date.html" className="list-box check-list">
							<h6 className="title"><i className="la la-check-square"></i>Checklist</h6>
							<p>19% Complete</p>
						</a>
					</li>
					<li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.5s">
						<a href="planner-shortlist.html" className="list-box short-list">
							<h6 className="title"><i className="la la-heart-o"></i>Shortlist</h6>
							<p>2 Saved</p>
						</a>
					</li>
					<li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<a href="planner-advice.html" className="list-box advice-list">
							<h6 className="title"><i className="la la-bookmark"></i>Advice</h6>
							<p>250 ideas</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	
		<div className="wedding-filter-search wedding-filter-advice">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h2 className="title">Our wedding budget</h2>
						<a href="https://www.youtube.com/watch?v=Dj6CKxQue7U" className="video-popup popup-youtube video"><i className="la la-play-circle-o"></i> Watch how the budget works</a>
					</div>
				</div>
			</div>
		</div>
	
		<div className="section-full bg-gray content-inner">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 col-sm-12 card-container wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="featured-bx m-b30">
							<div className="featured-media">
								<img src="/assetsimages/gallery/gallery/pic1.jpg" alt=""/>
							</div>	
							<div className="featured-info">
								<h5 className="title"><a href="wedding-venues-search.html">Gosfield Hall Wedding Venue</a></h5>
								<a href="wedding-venues-search.html" className="btn gradient btn-sm">Search</a>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12 card-container">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-6 card-container wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
								<div className="featured-bx m-b30">
									<div className="featured-media">
										<img src="cimages/gallery/gallery/pic3.jpg" alt=""/>
									</div>	
									<div className="featured-info">
										<h5 className="title"><a href="wedding-venues-search.html">Wedding Photographers</a></h5>
										<a href="wedding-venues-search.html" className="btn gradient btn-sm">Search</a>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6 card-container wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
								<div className="featured-bx m-b30">
									<div className="featured-media">
										<img src="images/gallery/gallery/pic4.jpg" alt=""/>
									</div>	
									<div className="featured-info">
										<h5 className="title"><a href="wedding-venues-search.html">Wedding Caterers</a></h5>
										<a href="wedding-venues-search.html" className="btn gradient btn-sm">Search</a>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-sm-12 card-container wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
								<div className="featured-bx m-b30">
									<div className="featured-media">
										<img src="/assets/images/gallery/gallery/pic2.jpg" alt=""/>
									</div>	
									<div className="featured-info">
										<h5 className="title"><a href="wedding-venues-search.html">Wedding Florists</a></h5>
										<a href="wedding-venues-search.html" className="btn gradient btn-sm">Search</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div className="section-full bg-white content-inner about-us">
			<div className="container">
				<div className="section-head text-black text-center">
					<h2 className="box-title">Expert Advice and Real Weddings</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
				</div>
				<div className="row sp20">
					<div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="listing-bx m-b20 expert-advice">
							<div className="listing-media">
								<img src="/assets/images/listing/pic1.jpg" alt=""/>
								<div className="media-info">
									<a className="like-btn" href="javascript:void(0)"><i className="fa fa-heart-o"></i></a>
								</div>
							</div>
							<div className="listing-info">
								<h3 className="title"><a href="outdoor-wedding-venues.html">Outdoor Wedding Venues in London</a></h3>
								<a href="outdoor-wedding-venues.html" className="btn-link">Expert Advice</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="listing-bx m-b20 expert-advice">
							<div className="listing-media">
								<img src="/assets/images/listing/pic2.jpg" alt=""/>
								<div className="media-info">
									<a className="like-btn" href="javascript:void(0)"><i className="fa fa-heart-o"></i></a>
								</div>
							</div>
							<div className="listing-info">
								<h3 className="title"><a href="outdoor-wedding-venues.html">Barn Wedding Venues in Cheshire</a></h3>
								<a href="outdoor-wedding-venues.html" className="btn-link">Expert Advice</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="listing-bx m-b20 expert-advice">
							<div className="listing-media">
								<img src="/assets/images/listing/pic3.jpg" alt=""/>
								<div className="media-info">
									<a className="like-btn" href="javascript:void(0)"><i className="fa fa-heart-o"></i></a>
								</div>
							</div>
							<div className="listing-info">
								<h3 className="title"><a href="outdoor-wedding-venues.html">Small Wedding Venues in Yorkshire</a></h3>
								<a href="outdoor-wedding-venues.html" className="btn-link">Expert Advice</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="listing-bx m-b20 expert-advice">
							<div className="listing-media">
								<img src="/assets/images/listing/pic4.jpg" alt=""/>
								<div className="media-info">
									<a className="like-btn" href="javascript:void(0)"><i className="fa fa-heart-o"></i></a>
								</div>
							</div>
							<div className="listing-info">
								<h3 className="title"><a href="outdoor-wedding-venues.html">Asian Wedding Venues Birmingham</a></h3>
								<a href="outdoor-wedding-venues.html" className="btn-link">Expert Advice</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="listing-bx m-b20 expert-advice">
							<div className="listing-media">
								<img src="/assets/images/listing/pic5.jpg" alt=""/>
								<div className="media-info">
									<a className="like-btn" href="javascript:void(0)"><i className="fa fa-heart-o"></i></a>
								</div>
							</div>
							<div className="listing-info">
								<h3 className="title"><a href="outdoor-wedding-venues.html">Unusual wedding venues in London</a></h3>
								<a href="outdoor-wedding-venues.html" className="btn-link">Expert Advice</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="listing-bx m-b20 expert-advice">
							<div className="listing-media">
								<img src="/assets/images/listing/pic6.jpg" alt=""/>
								<div className="media-info">
									<a className="like-btn" href="javascript:void(0)"><i className="fa fa-heart-o"></i></a>
								</div>
							</div>
							<div className="listing-info">
								<h3 className="title"><a href="outdoor-wedding-venues.html">Choosing Wedding Food in 5 Simple</a></h3>
								<a href="outdoor-wedding-venues.html" className="btn-link">Expert Advice</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="listing-bx m-b20 expert-advice">
							<div className="listing-media">
								<img src="/assets/images/listing/pic7.jpg" alt=""/>
								<div className="media-info">
									<a className="like-btn" href="javascript:void(0)"><i className="fa fa-heart-o"></i></a>
								</div>
							</div>
							<div className="listing-info">
								<h3 className="title"><a href="outdoor-wedding-venues.html">Wedding Films : 4 Reasons Why You</a></h3>
								<a href="outdoor-wedding-venues.html" className="btn-link">Expert Advice</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="listing-bx m-b20 expert-advice">
							<div className="listing-media">
								<img src="/assets/images/listing/pic8.jpg" alt=""/>
								<div className="media-info">
									<a className="like-btn" href="javascript:void(0)"><i className="fa fa-heart-o"></i></a>
								</div>
							</div>
							<div className="listing-info">
								<h3 className="title"><a href="outdoor-wedding-venues.html">How to Confirm Your Wedding</a></h3>
								<a href="outdoor-wedding-venues.html" className="btn-link">Expert Advice</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div className="section-full bg-gray content-inner">
			<div className="container">
				<div className="section-head text-black text-center">
					<h2 className="box-title">Get organised</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-6 col-12 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
						<div className="planning-tools text-center m-b30">
							<div className="icon-bx">
								<i className="flaticon-dollar"></i>
							</div>
							<div className="content-bx">
								<h5 className="title">Manager your <br/> wedding Budget</h5>
								<a href="planner-budget-select.html" className="btn purple gradient">Budget</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-6 col-12 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="planning-tools text-center m-b30">
							<div className="icon-bx">
								<i className="flaticon-management"></i>
							</div>
							<div className="content-bx">
								<h5 className="title">Manage your wedding Guest List</h5>
								<a href="planner-guest-list.html" className="btn yellow gradient">Guest List</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12 col-12 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
						<div className="planning-tools text-center m-b30">
							<div className="icon-bx">
								<i className="flaticon-checked"></i>
							</div>
							<div className="content-bx">
								<h5 className="title">Start your wedding Checklist</h5>
								<a href="planner-checklist-select-date.html" className="btn green gradient">Checklist</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div className="modal fade date-wizard planroll" id="exampleModal"tabIndex="-1" role="dialog" aria-labelledby="exampleModal" >
			<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<div className="modal-dialog" role="document">
				<form className="modal-content start-here" id="ProfileStep1">
					<div className="planroll-nav">
						<a href="#" className="prev">Back</a>
						<span>1 / 8</span>
						<a href="#" className="next" >Skip</a>
					</div>
					<div className="planroll-imgbx" style={{backgroundImage:'assets/images/icon/pic1.jpg'}}></div>
					<div className="start-here-bx">
						<div className="planroll-title">
							<h5 className="title">Welcome To Wedding Manager</h5>
							<p>Add your names below.</p>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Your Name"/>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Your Partner's name"/>
						</div>
					</div>
					<div className="modal-footer text-center">
						<button type="button" className="btn gradient" data-toggle="tooltip"  data-placement="top" title="Congrats! Even your names look great together.">Let's get started!</button>
					</div>
				</form>
				<form className="modal-content start-planning " id="ProfileStep2">
					<div className="planroll-nav">
						<a href="#" className="prev">Back</a>
						<span>2 / 8</span>
						<a href="#" className="next" >Skip</a>
					</div>
					<div className="planroll-imgbx" style={{backgroundImage:'assets/images/icon/pic2.png'}}></div>
					<div className="start-here-bx">
						<div className="">
							<div className="planroll-title">
								<h5 className="title">What Planning have you done so far?</h5>
							</div>
							<ul className="select-list clearfix list-inline list-2">
								<li>
									<div className="custom-control custom-checkbox checkbox-lg">
										<input type="checkbox" className="custom-control-input" id="must-haves1"/>
										<label className="custom-control-label" htmlFor="must-haves1">We have a rough budget in mind</label>
									</div>
								</li>
								<li>
									<div className="custom-control custom-checkbox checkbox-lg">
										<input type="checkbox" className="custom-control-input" id="must-haves2"/>
										<label className="custom-control-label" htmlFor="must-haves2">We've decided on our venue</label>
									</div>
								</li>
								<li>
									<div className="custom-control custom-checkbox checkbox-lg">
										<input type="checkbox" className="custom-control-input" id="must-haves3"/>
										<label className="custom-control-label" htmlFor="must-haves3">We know who we'll be inviting</label>
									</div>
								</li>
								<li>
									<div className="custom-control custom-checkbox checkbox-lg">
										<input type="checkbox" className="custom-control-input" id="must-haves4"/>
										<label className="custom-control-label" htmlFor="must-haves4">We know the style of venue we want</label>
									</div>
								</li>
								<li>
									<div className="custom-control custom-checkbox checkbox-lg">
										<input type="checkbox" className="custom-control-input" id="must-haves5"/>
										<label className="custom-control-label" htmlFor="must-haves5">We haven't started at all</label>
									</div>
								</li>
								<li>
									<div className="custom-control custom-checkbox checkbox-lg">
										<input type="checkbox" className="custom-control-input" id="must-haves6"/>
										<label className="custom-control-label" htmlFor="must-haves6">We've already set the date!</label>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="modal-footer text-center">
						<button type="button" className="btn gradient" data-toggle="tooltip" data-placement="top" title="Congrats! Even your names look great together.">Next Step</button>
					</div>
				</form>
				<form className="modal-content start-here" id="ProfileStep3">
					<div className="planroll-nav">
						<a href="#" className="prev" >Back</a>
						<span>3 / 8</span>
						<a href="#" className="next">Skip</a>
					</div>
					<div className="planroll-imgbx" style={{backgroundImage:'assets/images/icon/pic3.png'}}></div>
					<div className="start-here-bx wedding-reception-bx">
						<div className="planroll-title">
							<h5 className="title">Have you booked your wedding reception venue?</h5>
						</div>
						<ul className="nav nav-tabs" id="myTab" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Yes, we have!</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">No, not yet!</a>
							</li>
						</ul>
						<div className="tab-content" id="myTabContent">
							<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
								<div className="form-group">
									<input type="text" className="form-control search" placeholder="Your wedding venue name?"/>
								</div>
								<div className="form-group text-center">
									<div className="custom-control custom-radio radio-lg d-inline">
										<input type="radio" className="custom-control-input" id="later"/>
										<label className="custom-control-label" htmlFor="later">We'll do it later</label>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
								<div className="form-group">
									<input type="text" className="form-control search" placeholder="e.g. ‘Bristol’, Yorkshire, or ‘Scotland’"/>
								</div>
								<div className="form-group text-center">
									<div className="custom-control custom-radio radio-lg d-inline">
										<input type="radio" className="custom-control-input" id="Undecided"/>
										<label className="custom-control-label" htmlFor="Undecided">Undecided on where</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="modal-footer text-center">
						<button type="button" className="btn gradient" data-toggle="tooltip" data-placement="top" title="Congrats! Even your names look great together.">Next Step</button>
					</div>
				</form>
		
				<div className="modal-content date-wizard-area" id="ProfileStep4">
					<div className="planroll-nav">
						<a href="#" className="prev" >Prev</a>
						<span>4 / 8</span>
						<a href="#" className="next">Next</a>
					</div>
					<div className="modal-header">
						<h5 className="title">Ideal wedding date</h5>
						<span className="date">20 January 2020</span>
					</div>
					<form action="#" id="myForm" role="form" data-toggle="validator" method="post" acceptCharset="utf-8">
						
						<div id="smartwizard">
							<ul>
								<li><a href="#step-1">Year</a></li>
								<li><a href="#step-2">Season/Month</a></li>
								<li><a href="#step-3">Day</a></li>
							</ul>
							<div>
								<div id="step-1">
									<div className="seclect-box">
										<div className="seclect-area">
											<h5 className="title">Select a year</h5>
											<div className="btn-group btn-group-toggle btn-select" data-toggle="buttons">
												<label className="btn active">
													<input type="radio" name="options" id="2020"  required/> 2020
												</label>
												<label className="btn">
													<input type="radio" name="options" id="2020" required/> 2020
												</label>
												<label className="btn">
													<input type="radio" name="options" id="2021" required/> 2021
												</label>
												<label className="btn">
													<input type="radio" name="options" id="2022" required/> 2022
												</label>
												<label className="btn">
													<input type="radio" name="options" id="2023" required/> 2023
												</label>
												<label className="btn">
													<input type="radio" name="options" id="2024" required/> 2024
												</label>
											</div>
											<div className="help-block with-errors"></div>
										</div>
										<div className="seclect-area select-option">
											<h5 className="title">Or select from the list</h5>
											<select>
												
												<option>2023</option>
												<option>2024</option>
												<option>2025</option>
											
											</select>
										</div>
									</div>
								</div>
								<div id="step-2">
									<div className="seclect-box">
										<div className="seclect-area">
											<h5 className="title">Select a season</h5>
											<div className="btn-group btn-group-toggle btn-select weather-bx" data-toggle="buttons">
												<label className="btn active">
													<input type="radio" name="options" id="Spring" required/> Spring
												</label>
												<label className="btn">
													<input type="radio" name="options" id="Summer" required/> Summer
												</label>
												<label className="btn">
													<input type="radio" name="options" id="Fall" required/> Fall
												</label>
												<label className="btn">
													<input type="radio" name="options" id="Winter" required/> Winter
												</label>
											</div>
											<div className="help-block with-errors"></div>
										</div>
										<div className="seclect-area select-option">
											<h5 className="title">Or select a month</h5>
											<div className="btn-group btn-group-toggle btn-select m-b15" data-toggle="buttons">
												<label className="btn active">
													<input type="radio" name="options" id="January" required/> January
												</label>
												<label className="btn">
													<input type="radio" name="options" id="February" required/> February
												</label>
												<label className="btn">
													<input type="radio" name="options" id="March" required/> March
												</label>
												<label className="btn">
													<input type="radio" name="options" id="April"  required/> April
												</label>
												<label className="btn">
													<input type="radio" name="options" id="May" required/> May
												</label>
												<label className="btn">
													<input type="radio" name="options" id="June" required/> June
												</label>
												<label className="btn">
													<input type="radio" name="options" id="July" required/> July
												</label>
												<label className="btn">
													<input type="radio" name="options" id="August" required/> August
												</label>
												<label className="btn">
													<input type="radio" name="options" id="September" required/> September
												</label>
												<label className="btn">
													<input type="radio" name="options" id="October" required/> October
												</label>
												<label className="btn">
													<input type="radio" name="options" id="November" required/> November
												</label>
												<label className="btn">
													<input type="radio" name="options" id="December" required/> December
												</label>
											</div>
											<div className="custom-control custom-radio radio-lg">
												<input type="radio" className="custom-control-input" id="list1"/>
												<label className="custom-control-label" htmlFor="list1">Undecided on month/season</label>
											</div>
										</div>
									</div>
								</div>
								<div id="step-3">
									<div className="seclect-box">
										<div className="seclect-area">
											<h5 className="title">Select a day of the week</h5>
											<div className="btn-group btn-group-toggle btn-select weather-bx" data-toggle="buttons">
												<label className="btn active">
													<input type="radio" name="options" id="Mon-Thurs" required/> Mon-Thurs
												</label>
												<label className="btn">
													<input type="radio" name="options" id="Friday" required/> Friday
												</label>
												<label className="btn">
													<input type="radio" name="options" id="Saturday" required/> Saturday
												</label>
												<label className="btn">
													<input type="radio" name="options" id="Sunday" required/> Sunday
												</label>
											</div>
											<div className="help-block with-errors"></div>
										</div>
										<div className="seclect-area select-option">
											<h5 className="title">Or select a date</h5>
											<div className="btn-group btn-group-toggle btn-select m-b15 calendar-bx" data-toggle="buttons">
												<ul>
													<li>Mo</li>
													<li>Tu</li>
													<li>We</li>
													<li>Th</li>
													<li>Fr</li>
													<li>Sa</li>
													<li>Su</li>
												</ul>
												<label className="btn active"><input type="radio" name="options" id="01"  required/> 01</label>
												<label className="btn"><input type="radio" name="options" id="02" required/>02</label>
												<label className="btn"><input type="radio" name="options" id="03" required/>03</label>
												<label className="btn"><input type="radio" name="options" id="04" required/>04</label>
												<label className="btn"><input type="radio" name="options" id="05" required/>05</label>
												<label className="btn"><input type="radio" name="options" id="06" required/>06</label>
												<label className="btn"><input type="radio" name="options" id="07" required/>07</label>
												<label className="btn"><input type="radio" name="options" id="08" required/>08</label>
												<label className="btn"><input type="radio" name="options" id="09" required/>09</label>
												
												<label className="btn"><input type="radio" name="options" id="19" required/>19</label>
												<label className="btn"><input type="radio" name="options" id="20" required/>20</label>
												<label className="btn"><input type="radio" name="options" id="21" required/>21</label>
												
												<label className="btn"><input type="radio" name="options" id="30" required/>30</label>
												<label className="btn"><input type="radio" name="options" id="31" required/>31</label>
											</div>
											<div className="custom-control custom-radio radio-lg">
												<input type="radio" className="custom-control-input" id="date"/>
												<label className="custom-control-label" htmlFor="date">Undecided on date/day</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
				<form className="modal-content start-here" id="ProfileStep5">
					<div className="planroll-nav">
						<a href="#" className="prev">Back</a>
						<span>5 / 8</span>
						<a href="#" className="next" >Skip</a>
					</div>
					<div className="planroll-imgbx" style={{backgroundImage:'assetsimages/icon/pic4.png'}}></div>
					<div className="start-here-bx wedding-reception-bx">
						<div className="planroll-title">
							<h5 className="title">Have you booked your wedding reception venue?</h5>
							<p>This will help us show you suitable venues.</p>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Estimated number of guests?"/>
						</div>
						<div className="form-group text-center">
							<div className="custom-control custom-radio radio-lg d-inline">
								<input type="radio" className="custom-control-input" id="know-yet"/>
								<label className="custom-control-label" htmlFor="know-yet">We don't know yet</label>
							</div>
						</div>
					</div>
					<div className="modal-footer text-center">
						<button type="button" className="btn gradient" data-toggle="tooltip" data-placement="top"  title="Congrats! Even your names look great together.">Next Step</button>
					</div>
				</form>
				<form className="modal-content start-here" id="ProfileStep6">
					<div className="planroll-nav">
						<a href="#" className="prev" >Back</a>
						<span>6 / 8</span>
						<a href="#" className="next" >Skip</a>
					</div>
					<div className="planroll-imgbx" style={{backgroundImage:'assets/images/icon/pic5.png'}}></div>
					<div className="start-here-bx wedding-reception-bx">
						<div className="planroll-title">
							<h5 className="title">Do you have an overall wedding budget in mind?</h5>
							<p>Guess-timate your total budget so we can tell you what to spend on each supplier.  Not sure? The average UK wedding costs around £17,000.</p>
						</div>
						<div className="form-group">
							
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text " id="basic-addon1"><i className="fa fa-usd"></i></span>
								</div>
								<input type="text" className="form-control" placeholder="Estimated wedding budget?"/>
							</div>
						</div>
						<div className="form-group text-center">
							<div className="custom-control custom-radio radio-lg d-inline">
								<input type="radio" className="custom-control-input" id="know-yet1"/>
								<label className="custom-control-label" htmlFor="know-yet1">We don't know yet</label>
							</div>
						</div>
					</div>
					<div className="modal-footer text-center">
						<button type="button" className="btn gradient" data-toggle="tooltip" data-placement="top" title="Congrats! Even your names look great together.">Next Step</button>
					</div>
				</form>
				<form className="modal-content start-here" id="ProfileStep7">
					<div className="planroll-nav">
						<a href="#" className="prev" >Back</a>
						<span>7 / 8</span>
						<a href="#" className="next" >Skip</a>
					</div>
					<div className="planroll-imgbx" style={{backgroundImage:'assets/images/icon/pic6.png'}}></div>
					<div className="start-here-bx wedding-reception-bx">
						<div className="planroll-title">
							<h5 className="title">Add Kuldeep Gaur</h5>
							<p>Add your partner to your Wedding Manager so you can plan your wedding together.</p>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Add your partner’s email"/>
						</div>
					</div>
					<div className="modal-footer text-center">
						<button type="button" className="btn gradient" data-toggle="tooltip" data-placement="top" title="Congrats! Even your names look great together.">Next Step</button>
					</div>
				</form>
				<form className="modal-content start-here" id="ProfileStep8">
					<div className="planroll-nav">
						<a href="#" className="prev" >Back</a>
						<span>8 / 8</span>
						<a href="#" className="next">Done</a>
					</div>
					<div className="planroll-imgbx" style={{backgroundImage:'assets/images/icon/pic7.png'}}></div>
					<div className="start-here-bx wedding-reception-bx">
						<div className="planroll-title">
							<h5 className="title">And finally...</h5>
							<p>All enquiries you send will come from this email address: Confirm your email address</p>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Add your partner’s email"/>
						</div>
					</div>
					<div className="modal-footer text-center">
						<button type="button" className="btn gradient" data-toggle="tooltip" data-placement="top" title="Congrats! Even your names look great together.">Confirm</button>
					</div>
				</form>
				<div className="modal-content start-here" id="ProfileStep9">
					<div className="planroll-nav">
						<a href="#" className="prev" >Prev</a>
						<span>Done</span>
						<a href="#" className="next" >Finish</a>
					</div>
			<div className="planroll-imgbx" style={{backgroundImage:'assets/images/icon/pic8.png'}}></div>
					<div className="start-here-bx wedding-reception-bx">
						<div className="planroll-title">
							<h5 className="title">Congratulations, your Wedding Manager is ready!</h5>
						</div>
						<div className="found-matches">
							<h4 className="title">We’ve found your matches!</h4>
							<p>There are 8441 wedding venues in the United Kingdom.</p>
							<a href="wedding-venues-search.html" className="btn gradient"><i className="fa fa-search"></i> See them now</a>
						</div>
						<div className="form-group">
							<ul className="myacountlist">
								<li><a href="planner-checklist-select-date.html"><img src="/assets/images/icon/icon2/icon4.png" alt=""/><span>Checklist</span></a></li>
								<li><a href="planner-shortlist.html"><img src="/assets/images/icon/icon2/icon6.png" alt=""/><span>Shortlist</span></a></li>
								<li><a href="planner-budget-select.html"><img src="/assets/images/icon/icon2/icon5.png" alt=""/><span>Budget</span></a></li>
								<li><a href="planner-guest-list.html"><img src="/assets/images/icon/icon2/icon3.png" alt=""/><span>Guest List</span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
    <footer className="site-footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
					<div className="col-lg-3 col-md-3 col-sm-6 col-6">
                        <div className="widget widget-list">
                            <h5 className="widget-title">About Us</h5>
                            <ul>
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="pressandmedia.html">Press And Media</a></li>
                                <li><a href="javascript:void(0);">info@example.com</a></li>
							</ul>
                        </div>
                    </div>
					<div className="col-lg-3 col-md-3 col-sm-6 col-6">
                        <div className="widget widget-list">
                            <h5 className="widget-title">For Couples</h5>
                            <ul>
                                <li><a href="wedding-planning-tools.html">Manager Tools</a></li>
                                <li><a href="wedding-suppliers.html">Wedding Suppliers</a></li>
                                <li><a href="wedding-ideas-inspiration.html">Ideas Inspiration</a></li>
                                <li><a href="wedding-gift-lists.html">Wedding Gift Lists</a></li>
							</ul>
                        </div>
                    </div>
					<div className="col-lg-3 col-md-3 col-sm-6  col-6">
                        <div className="widget widget-list">
                            <h5 className="widget-title">For Business</h5>
                            <ul>
                                <li><a href="index-business.html">Business</a></li>
							</ul>
                        </div>
                    </div>
					<div className="col-lg-3 col-md-3 col-sm-6 col-6">
                        <div className="widget widget-app">
                            <h5 className="widget-title">GET THE APP</h5>
							<img src="/assets/images/app1.jpg" alt=""/>
							<img src="/assets/images/app2.jpg" alt=""/>
                        </div>
                    </div>
				</div>
            </div>
        </div>
		<div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
						<span className="copyright"> © Copyright 2020 Wedding Manager</span> 
					</div>
					<div className="col-lg-6">
						<ul className="footer-list">
							<li><a href="cookie-policy.html">Cookie Policy</a></li>
							<li><a href="privacy-policy.html">Privacy Policy</a></li>
							<li><a href="terms.html">Terms & Conditions</a></li>
						</ul> 
					</div>
                </div>
            </div>
        </div>
    </footer>
   
    <button className="scroltop fa fa-chevron-up" ></button>
</div>
</div>
                        )}      
         { isSuccess  && <Home /> } 
    </>
  )
}
