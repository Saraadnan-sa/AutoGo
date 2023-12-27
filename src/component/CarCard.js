import React from 'react'

const CarCard = (props) => {
	return (
		<div className="card mb-3 mx-auto" style={{ maxWidth: "70%" }}>
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
						</ul>
						<button type="button" className="btn btn-secondary">
							Read More
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CarCard