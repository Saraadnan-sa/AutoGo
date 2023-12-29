import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="d-flex" style={{justifyContent: 'center', width: '100%', height: '100vh', alignItems: 'center', color: 'white'}}>
		<div className="wrapper">
			<form action="">
				<h1>Login</h1>
				<div className="input-box">
					<input type="text" placeholder="Username" required />
					<i className="bx bxs-user"></i>
				</div>
				<div className="input-box">
					<input type="password" placeholder="Password" required />
					<i className="bx bxs-lock-alt"></i>
				</div>

				<button type="submit" className="btn">
					Login
				</button>
				<div className="register-link">
					<p>
						Don't have an account?<Link to="/signup" style={{color: 'white', marginLeft: '10px'}}>Register</Link>
					</p>
				</div>
			</form>
		</div>
		</div>
	);
};

export default Login;
