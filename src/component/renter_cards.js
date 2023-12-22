import React, { useEffect } from "react";
import fetchData from "../utility/fetchData";

const Card = (props) => {

	useEffect(() => {
		const response = fetchData('')
	}, [])
	
	return (
		<div className="card text-center shadow " >

			<div className="overflow">
				<img src={props.imgsrc} alt="img1" className="card-img-top" />
			</div>

			<div className="card-bodyb text-dark">
				<h4 className="card-title">{props.title}</h4>
				<h5 className="card-text text-secondary">{props.data}</h5>
				<a href="#" className="btn btn-outline-success" style={{ color: 'blue' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'blue'}> PROFILE</a>
			</div>
		</div>
	);
}
export default Card;