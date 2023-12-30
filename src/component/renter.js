import "./renter.css";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHouse, faInfoCircle, faUser, faIdCard } from '@fortawesome/free-solid-svg-icons';
import img from '../download.png'
import fetchData from "../utility/fetchData";
import Spinner from "./Spinner";

const Renter = (props) => {
	const [renter, setRenter] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchInfo = async () => {
			try {
				setLoading(true);
				let response = await fetchData(`/renter/${props.id}`, { method: 'GET' });
				response = await response.json();
				setRenter(response);
			} catch (error) {
				console.error("Error fetching renter information:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchInfo();
	}, [props.id]);

	return (
		<>
			{loading ? <Spinner />
				:
				<div className="main">
					<div className="left">
						<div className="title">
							<h1>RENTER INFORMATION <FontAwesomeIcon className="icon" icon={faInfoCircle} /></h1>
						</div>
						<div className="desc">
							<div>
								<FontAwesomeIcon className="icon" icon={faPhone} /> {renter.phoneNumber}
							</div>
							<hr />
							<div>
								<FontAwesomeIcon className="icon" icon={faHouse} /> {renter.address}
							</div>
							<hr />
							<div>
								<FontAwesomeIcon className="icon" icon={faIdCard} /> {renter.cnic}
							</div>
							<hr />
							<div>
								<FontAwesomeIcon className="icon" icon={faUser} /> Age: {renter.age}
							</div>
							<hr />
							{/* <div>
							<FontAwesomeIcon className="icon" icon={faCar} /> <a href="renter_cars.js">No of cars registered</a>
						</div> */}
						</div>
					</div>

					<div className="right">
						<div className="image" style={{ margin: '40px 0' }}>
							<img src={img} style={{ borderRadius: '150px' }} alt="user" />
						</div>

						<div className="info">
							<h3>{renter.name}</h3>
							<a href={`mailto:${renter.email}`}>
								<h5>{renter.email}</h5>
							</a>
						</div>
					</div>
				</div>}
		</>
	);
};

export default Renter;
