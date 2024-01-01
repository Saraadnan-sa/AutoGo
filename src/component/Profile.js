import "./renter.css";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHouse, faInfoCircle, faUser, faIdCard } from '@fortawesome/free-solid-svg-icons';
import img from '../download.png'
import fetchData from "../utility/fetchData";
import Spinner from "./Spinner";

const Profile = () => {
	const [profile, setProfile] = useState([]);
	const [loading, setLoading] = useState(false);
	const token = localStorage.getItem('token')
	const user = localStorage.getItem('user');

	useEffect(() => {
		const fetchInfo = async () => {
			try {
				setLoading(true);
				let response = await fetchData(`/${user}/profile`, {
					method: 'GET', headers: {
						token: token
					}
				});
				response = await response.json();
				setProfile(response);
			} catch (error) {
				console.error("Error fetching profile information:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchInfo();
	}, [token, user]);

	return (
		<>
			{loading ? <Spinner />
				:
				<div className="main">
					<div className="left">
						<div className="title">
							<h1>MY PROFILE <FontAwesomeIcon className="icon" icon={faInfoCircle} /></h1>
						</div>
						<div className="desc">
							<div>
								<FontAwesomeIcon className="icon" icon={faPhone} /> {profile.phoneNumber}
							</div>
							<hr />
							<div>
								<FontAwesomeIcon className="icon" icon={faHouse} /> {profile.address}
							</div>
							<hr />
							<div>
								<FontAwesomeIcon className="icon" icon={faIdCard} /> {profile.cnic}
							</div>
							<hr />
							<div>
								<FontAwesomeIcon className="icon" icon={faUser} /> Age: {profile.age}
							</div>
							<hr />
							{/* <div>
							<FontAwesomeIcon className="icon" icon={faCar} /> <a href="profile_cars.js">No of cars registered</a>
						</div> */}
						</div>
					</div>

					<div className="right">
						<div className="image" style={{ margin: '40px 0' }}>
							<img src={img} style={{ borderRadius: '150px' }} alt="user" />
						</div>

						<div className="info">
							<h3>{profile.name}</h3>
							<a href={`mailto:${profile.email}`}>
								<h5>{profile.email}</h5>
							</a>
						</div>
					</div>
				</div>}
		</>
	);
};

export default Profile;
