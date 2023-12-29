import React, { useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "../utility/fetchData";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		userType: "renter", // Default to "Renter"
	});

	const handleChange = (e) => {
		// Update the form data when input values change
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleradioChange = (e) => {
		// Update the userType when radio values change
		const userType = e.target.value;
		setFormData({ ...formData, userType });
	};

	const handleSubmit = async (e) => {
		e.preventDefault(); // Prevent the default form submission behavior

		try {
			console.log(formData); 
			// Make API request to the appropriate endpoint
			const endpoint = `/${formData.userType}/login`; // Replace with your actual login endpoint
			const response = await fetchData(endpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			console.log(response);

			if (response.ok) {
				const data = await response.json();
				console.log(data.token); // Handle successful login
				window.localStorage.setItem('token', data.token);
				window.location.href = '/availableCars';
			} else {
				console.error("Login failed");
				alert("Invalid email or password");
			}
		} catch (error) {
			console.error("Error during login:", error);
		}
	};

	return (
		<div className="d-flex" style={{ justifyContent: 'center', width: '100%', height: '100vh', alignItems: 'center', color: 'white' }}>
			<div className="wrapper">
				<form onSubmit={handleSubmit}>
					<h1>Login</h1>
					<div className="input-box">
						<input
							type="text"
							placeholder="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<i className="bx bxs-user"></i>
					</div>
					<div className="input-box">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							required
						/>
						<i className="bx bxs-lock-alt"></i>
					</div>

					<div>
						<label style={{margin: '0 10px'}}>
							Renter
							<input
								type="radio"
								name="userType"
								value="renter"
								checked={formData.userType === "renter"}
								onChange={handleradioChange}
							/>
						</label>
						<label style={{margin: '0 10px'}}>
							Driver
							<input
								type="radio"
								name="userType"
								value="driver"
								checked={formData.userType === "driver"}
								onChange={handleradioChange}
							/>
						</label>
						<label style={{margin: '0 10px'}}>
							Rentee
							<input
								type="radio"
								name="userType"
								value="rentee"
								checked={formData.userType === "rentee"}
								onChange={handleradioChange}
							/>
						</label>
					</div>

					<button type="submit" className="btn">
						Login
					</button>
					<div className="register-link">
						<p>
							Don't have an account? <Link to="/signup" style={{ color: 'white', marginLeft: '10px' }}>Register</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
