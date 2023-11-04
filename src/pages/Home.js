import React, { useState } from 'react'

export default function Home() {



	return (
		<div>
			<div className="page-wraper">
				{/* header */}
				
				{/* after singhup click */}
				

				
				<div className="page-content bg-white">

					<div className="dlab-bnr-inr text-center home-banner dlab-bnr-inr-sm overlay-black-dark" id="app-banner" style={{ backgroundImage: `assets/images/banner/bnr1.jpg"; background-size: cover` }}>


						<div className="container">
							<div className="dlab-bnr-inr-entry align-m">
								<div className="bnr-content">
									<div className="icon-bx">
										<img src="assets/images/icon/icon3/icon1.png/images" alt="" />
									</div>
									<h2 className="title">Shagun Samaroh</h2>
									<a href="#" className="btn btn-md gradient radius-xl" data-toggle="modal" data-target="#login"><img src="assets/images/icon/icon3/icon2.png" className="m-r5" alt="" /> Plan Your Wedding or Birthday</a>
								</div>
							</div>
						</div>
					</div>

					<div className="section-full bg-gray content-inner" style={{ backgroundimage: `assets/images/background/bg1.png; background-size: cover; background-position: right bottom` }}>
						<div className="container">
							<div className="section-head text-center">
								<h2 className="box-title text-italic">Shagun Samaroh Tools</h2>
							</div>
							<div className="row">
								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6  wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
									<div className="planning-tools style1 text-center m-b30">
										<div className="icon-bx">
											<img alt="" src="assets/images/icon/icon2/icon3.png" />
										</div>
										<div className="content-bx">
											<h5 className="title text-black">Guestlists</h5>
											<p>Easily track invitations, RSVPs, and guest info all in one place.</p>
											<a href="planner-guest-list.html" className="btn gradient radius-xl">Read More</a>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
									<div className="planning-tools style1 text-center m-b30">
										<div className="icon-bx">
											<img alt="" src="assets/images/icon/icon2/icon4.png" />
										</div>
										<div className="content-bx">
											<h5 className="title text-black">Checklist</h5>
											<p>Easily track invitations, RSVPs, and guest info all in one place.</p>
											<a href="planner-checklist-select-date.html" className="btn gradient radius-xl">Read More</a>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
									<div className="planning-tools style1 text-center m-b30">
										<div className="icon-bx">
											<img alt="" src="assets/images/icon/icon2/icon5.png" />
										</div>
										<div className="content-bx">
											<h5 className="title text-black">Budget</h5>
											<p>Easily track invitations, RSVPs, and guest info all in one place.</p>
											<a href="planner-budget-select.html" className="btn gradient radius-xl">Read More</a>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
									<div className="planning-tools style1 text-center m-b30">
										<div className="icon-bx">
											<img alt="" src="assets/images/icon/icon2/icon6.png" />
										</div>
										<div className="content-bx">
											<h5 className="title text-black">Shortlist</h5>
											<p>Easily track invitations, RSVPs, and guest info all in one place.</p>
											<a href="planner-shortlist.html" className="btn gradient radius-xl">Read More</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="section-full bg-gray content-inner overlay-black-dark wow fadeIn" id="app-search" data-wow-duration="2s" data-wow-delay="0.3s" style={{ backgroundimage: `assets/images/background/bg4.jpg; background-size: cover; background-position: right bottom` }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="section-head venue-search-title text-center">
										<h2 className="box-title text-italic">Search the UK`s favourite wedding suppliers by category, location or name</h2>
									</div>
								</div>
								<div className="col-lg-12">

									<div className="search-filter style1">
										<div className="container">
											<form className="filter-form" action="wedding-venues-search.html">
												<div className="row sp10">
													<div className="col-lg-4 col-md-6 col-sm-6">
														<input type="text" className="form-control" placeholder="We’re looking for" />
													</div>
													<div className="col-lg-3 col-md-6 col-sm-6">
														<input type="text" className="form-control" placeholder="Near" />
													</div>
													<div className="col-lg-3 col-md-6 col-sm-6">
														<input type="text" className="form-control" placeholder="Or Called" />
													</div>
													<div className="col-lg-2 col-md-6 col-sm-6 d-flex">
														<button className="btn btn-block radius-xl text-uppercase"> Search</button>
													</div>
												</div>
											</form>
										</div>
									</div>

								</div>
							</div>
							<div className="section-head venue-search-list-title text-center">
								<div className="separate gradient"></div>
								<h2 className="box-title text-gradient">Popular venue searches</h2>
							</div>
							<div className="row venue-search-list">
								<div className="col-lg-3 col-md-3 col-6">
									<ul>
										<li><a href="wedding-venues-search.html">Essex</a></li>
										<li><a href="wedding-venues-search.html">Kent</a></li>
										<li><a href="wedding-venues-search.html">Surrey</a></li>
										<li><a href="wedding-venues-search.html">Hampshire</a></li>
									</ul>
								</div>
								<div className="col-lg-3 col-md-3 col-6">
									<ul>
										<li><a href="wedding-venues-search.html">Hertfordshire</a></li>
										<li><a href="wedding-venues-search.html">Yorkshire</a></li>
										<li><a href="wedding-venues-search.html">Buckinghamshire</a></li>
										<li><a href="wedding-venues-search.html">Lancashire</a></li>
									</ul>
								</div>
								<div className="col-lg-3 col-md-3 col-6">
									<ul>
										<li><a href="wedding-venues-search.html">West Midlands</a></li>
										<li><a href="wedding-venues-search.html">Leicestershire</a></li>
										<li><a href="wedding-venues-search.html">Northamtonshire</a></li>
										<li><a href="wedding-venues-search.html">Oxfordshire</a></li>
									</ul>
								</div>
								<div className="col-lg-3 col-md-3 col-6">
									<ul>
										<li><a href="wedding-venues-search.html">London</a></li>
										<li><a href="wedding-venues-search.html">Scotland</a></li>
										<li><a href="wedding-venues-search.html">Northern Ireland</a></li>
										<li><a href="wedding-venues-search.html">Wales</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="section-full bg-gray content-inner-2 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s" style={{ backgroundimage: `assets/images/background/bg5.jpg; background-size: cover; background-position: right bottom` }}>
						<div className="container-fluid testimonials-section">
							<div className="row">
								<div className="col-lg-12">
									<div className="section-head text-center">
										<h2 className="box-title text-black text-italic"> The easiest way to plan <br />your wedding</h2>
									</div>
								</div>
							</div>
							<div className="testimonials-carousel owl-carousel owl-theme">
								<div className="testimonials-box">
									<p>When I first started my wedding manager, I had no idea where to begin! But by using Wedding Manager I have been able to search for all of my suppliers, as well as organise my guestlist, checklist and budget. I now feel so much more relaxed about the wedding!</p>
									<h5 className="testimonials-name">- Alexia L. & Sam</h5>
									<div className="quote">
										<img src="assets/images/quote.png" alt="" />
									</div>
								</div>
								<div className="testimonials-box">
									<p>When I first started my wedding manager, I had no idea where to begin! But by using Wedding Manager I have been able to search for all of my suppliers, as well as organise my guestlist, checklist and budget. I now feel so much more relaxed about the wedding!</p>
									<h5 className="testimonials-name">- Alexia L. & Sam</h5>
									<div className="quote">
										<img src="assets/images/quote.png" alt="" />
									</div>
								</div>
								<div className="testimonials-box">
									<p>When I first started my wedding manager, I had no idea where to begin! But by using Wedding Manager I have been able to search for all of my suppliers, as well as organise my guestlist, checklist and budget. I now feel so much more relaxed about the wedding!</p>
									<h5 className="testimonials-name">- Alexia L. & Sam</h5>
									<div className="quote">
										<img src="assets/images/quote.png" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="section-full bg-gray content-inner-2" style={{ backgroundimage: `assets/images/background/bg3.jpg; background-size: cover; background-position: right bottom` }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-6 d-flex wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.4s">
									<div className="inspiration-box align-self-center">
										<h2 className="title text-black">Insightful inspiration</h2>
										<p>Whether you're a fan of dreamy white weddings or care-free bohemian celebrations, you'll find tips, tricks, and inspiration to guide you through every stage of your wedding manager. Who better to guide you than some of our illustrious experts like Mary Berry and Bobbi Brown?</p>
										<a href="wedding-ideas-inspiration.html" className="btn gradient btn-md radius-xl">Discover endless inspiration</a>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 d-flex wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.8s">
									<div className="align-self-center">
										<img alt="" src="assets/images/pic4.png" className="out-img img-wave" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="section-full content-inner-1 apps-box overlay-black-dark" id="app-mobile" style={{ backgroundimage: `assets/images/background/bg2.jpg; background-size: cover` }}>
						<div className="container">
							<div className="row col-md-revers">
								<div className="col-lg-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
									<img src="assets/images/pic3.png" alt="" />
								</div>
								<div className="col-lg-6 d-flex wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.6s">
									<div className="align-self-center p-a30 app-info text-white">
										<h2 className="title">Plan anywhere, anytime</h2>
										<p>Wedding Manager app is designed with busy modern couples like you in mind. You can now both simultaneously plan your wedding on the go, wherever that might be! Never lose track of your planning again with Wedding Manager.</p>
										<a href="#" className="m-r10 m-b10"><img src="assets/images/app1.png" alt="" /></a>
										<a href="#"><img src="assets/images/app2.png" alt="" /></a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="section-full bg-white content-inner expert-advice" style={{ backgroundimage: `assets/images/background/bg6.jpg; background-size: cover; background-position: left bottom` }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-12 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
									<div className="section-head">
										<h2 className="box-title text-gradient">Wedding Ideas and Expert Advice</h2>
										<p>Get inspired with creative ideas, expert advice and amazing real weddings</p>
										<div className="separate gradient"></div>
									</div>
									<ul className="expert-advice-list">
										<li>Expert Tips from a trusted team of pros...serious professionals like Bobbi Brown, Mary Berry, Jimmy Choo, Bodyism, La Perla, Harrods and more!</li>
										<li>Real Weddings to help you get some ideas (and related supplier links) for your own wedding</li>
										<li>‘How To’ Tips as your wedding guide so you feel confident in picking suppliers and choosing wedding details</li>
									</ul>
								</div>
								<div className="col-lg-6 col-md-12 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.6s">
									<img src="assets/images/pic2.png" className="img-wave" alt="" />
								</div>
							</div>
						</div>
					</div>

					<div className="section-full content-inner-2 overlay-black-dark bg-img-fix" id="app-today" style={{ backgroundimage: `assets/images/background/bg1.jpg; background-size: cover` }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12 text-center">
									<a href="javascript:void(0)" className="btn btn-md gradient radius-xl">Start today, it's free</a>
								</div>
							</div>
						</div>
					</div>

					<div className="section-full bg-gray content-inner">
						<div className="container">
							<div className="row">
								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
									<div className="wedding-services">
										<div className="icon-bx">
											<img src="assets/images/icon/icon2/icon1.png" alt="" />
										</div>
										<div className="content-bx">
											<a className="title" href="wedding-venues-search.html">Search</a>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
									<div className="wedding-services">
										<div className="icon-bx">
											<img src="assets/images/icon/icon2/icon2.png" alt="" />
										</div>
										<div className="content-bx">
											<a className="title" href="wedding-planning-tools.html">Manager Tools</a>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
									<div className="wedding-services">
										<div className="icon-bx">
											<img src="assets/images/icon/icon2/icon3.png" alt="" />
										</div>
										<div className="content-bx">
											<a className="title" href="planner-guest-list.html">Guestlist</a>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
									<div className="wedding-services">
										<div className="icon-bx">
											<img src="assets/images/icon/icon2/icon4.png" alt="" />
										</div>
										<div className="content-bx">
											<a className="title" href="planner-checklist-select-date.html">Checklist</a>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
									<div className="wedding-services">
										<div className="icon-bx">
											<img src="assets/images/icon/icon2/icon5.png" alt="" />
										</div>
										<div className="content-bx">
											<a className="title" href="planner-budget-select.html">Budget</a>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
									<div className="wedding-services">
										<div className="icon-bx">
											<img src="assets/images/icon/icon2/icon6.png" alt="" />
										</div>
										<div className="content-bx">
											<a className="title" href="planner-shortlist.html">Shortlist</a>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
									<div className="wedding-services">
										<div className="icon-bx">
											<img src="assets/images/icon/icon2/icon7.png" alt="" />
										</div>
										<div className="content-bx">
											<a className="title" href="planner-advice.html">Advice</a>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
									<div className="wedding-services">
										<div className="icon-bx">
											<img src="assets/images/icon/icon2/icon8.png" alt="" />
										</div>
										<div className="content-bx">
											<a className="title" href="wedding-gift-lists.html">Gift Lists</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>

				<button className="scroltop fa fa-chevron-up" ></button>
			</div>

		</div>
		
	)
}






