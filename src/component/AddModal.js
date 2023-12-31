import React from 'react'
import fetchData from '../utility/fetchData';
import { useState } from 'react';

const AddModal = () => {
	const token = localStorage.getItem('token')
	const userType = localStorage.getItem('user');

	const [formData, setFormData] = useState({
		carName: '',
		carModel: 0,
		make: '',
		engineCapacity: 0,
		mileage: 0,
		region: '',
		rentPerHour: 0,
		hasDriver: true,
		carNumber: '',
		duration: '',
		withPetrol: true,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const addCar = async () => {
		let response = await fetchData('', {
			method: 'POST',
			headers:
			{
				token: token
			}
		})
	}
	return (
		<>
			<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">ADD VEHICLE</button>

			<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-xl">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">ADD CAR</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form>
								<div className='row'>
									<div className='col-md-6'>
										<div className="mb-3">
											<label for="recipient-name" className="col-form-label"><strong>Car Name:</strong></label>
											<input type="text" className="form-control" id="recipient-name" value={formData.carName}
												onChange={handleChange} placeholder='e.g Honda City'></input>
										</div>
										<div className="mb-3">
											<label for="recipient-name" className="col-form-label"><strong>Car Model:</strong></label>
											<input type="number" className="form-control" id="recipient-name" value={formData.carModel}
												onChange={handleChange}></input>
										</div>
										<div className="mb-3">
											<label for="recipient-name" className="col-form-label"><strong>Make:</strong></label>
											<input type="text" className="form-control" id="recipient-name" value={formData.make}
												onChange={handleChange} placeholder='e.g Honda'></input>
										</div>
										<div className="mb-3">
											<label for="recipient-name" className="col-form-label"><strong>Engine Capacity:</strong></label>
											<input type="number" className="form-control" id="recipient-name" value={formData.engineCapacity}
												onChange={handleChange} placeholder='1300'></input>
										</div>
										<div className="mb-3">
											<label for="recipient-name" className="col-form-label"><strong>Mileage: (KM)</strong></label>
											<input type="number" className="form-control" id="recipient-name" value={formData.mileage}
												onChange={handleChange} placeholder='10500'></input>
										</div>
									</div>
									<div className='col-md-6'>
										<div className="mb-3">
											<label for="recipient-name" className="col-form-label"><strong>Region:</strong></label>
											<input type="text" className="form-control" id="recipient-name" value={formData.region}
												onChange={handleChange} placeholder='e.g Lahore Only'></input>
										</div>
										<div className="mb-3">
											<label for="recipient-name" className="col-form-label"><strong>Rent/hr:</strong></label>
											<input type="number" className="form-control" id="recipient-name" value={formData.rentPerHour}
												onChange={handleChange}></input>
										</div>
										<div className="mb-3">
											<label className="form-label">
												Availability of Driver:
												<select
													className="form-select mt-3" value={formData.hasDriver}
													onChange={handleChange}
												>
													<option value="true">With Driver</option>
													<option value="false">Without Driver</option>
												</select>
											</label>
										</div>
										<div className="mb-3">
											<label for="recipient-name" className="col-form-label"><strong>Car Number:</strong></label>
											<input type="text" className="form-control" id="recipient-name" value={formData.carNumber}
												onChange={handleChange} placeholder='e.g ABC 123'></input>
										</div>
										<div className="mb-3">
											<label for="recipient-name" className="col-form-label"><strong>Duration:</strong></label>
											<input type="text" className="form-control" id="recipient-name" value={formData.duration}
                                                    onChange={handleChange} placeholder='e.g 1 Day'></input>
										</div>
										<div className="mb-3">
											<label className="form-label">
												Petrol:
												<select
													className="form-select mt-3" value={formData.withPetrol}
                                                    onChange={handleChange}
												>
													<option value="true">With Petrol</option>
													<option value="false">Without Petrol</option>
												</select>
											</label>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Add Car</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AddModal;