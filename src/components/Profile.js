import React from 'react'
import '../css/profile.css'

const Profile = () => {
    return (
        <>
	<input type="checkbox" id="checkbox"/>
	<header className="header-profile">
		<h2 className="u-name">Profile <b>Details</b>
			<label for="checkbox">
				<i id="navbtn" className="fa fa-bars" aria-hidden="true"></i>
			</label>
		</h2>
		<i className="fa fa-user" aria-hidden="true"></i>
	</header>
	<div className="profile-body">
		<nav className="side-bar">
			<div className="user-p">
			<i className="fa fa-user" aria-hidden="true" style={{fontSize:'50px'}}></i>
				<h4>Elias</h4>
			</div>
			<ul>
				<li>
					<a href="#">
						<i className="fa fa-desktop" aria-hidden="true"></i>
						<span>Products</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-envelope-o" aria-hidden="true"></i>
						<span>Categories</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-comment-o" aria-hidden="true"></i>
						<span>Sub Category</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-info-circle" aria-hidden="true"></i>
						<span>About</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-cog" aria-hidden="true"></i>
						<span>Setting</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-power-off" aria-hidden="true"></i>
						<span>Logout</span>
					</a>
				</li>
			</ul>
		</nav>
		<section className="section-1">
			<h1>WELCOME</h1>
			<p>#CodingWithElias</p>
		</section>
	</div>

</>
    )
}

export default Profile
