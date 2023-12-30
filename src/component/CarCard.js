import React from 'react'
import { Link } from 'react-router-dom'

const CarCard = (props) => {
	return (
		<div className="card mb-3 mx-auto" style={{ maxWidth: "70%", border: '2px solid black', borderRadius: '10px' }}>
			<div className="row g-0">
				<div className="col-md-4">
					<img
						src={props.image}
						className="img-fluid rounded-start"
						alt="Card"
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{props.carName}</h5>
						<ul>
							<li>Mileage: {props.mileage}km</li>
							<li>Rate: {props.rate} per Hour</li>
							<li>Driver: {props.driver ? 'Available': 'Not Available'}</li>
							<li>Petrol: {props.withPetrol ? 'Included': 'Not Included'}</li>
						</ul>
						<Link type="button" className="btn btn-primary" to={`/vehicle/${props.id}`}>
							Read More
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CarCard