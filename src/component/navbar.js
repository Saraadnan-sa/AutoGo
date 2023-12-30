import { Link } from "react-router-dom";
import { FaCar, FaInfoCircle, FaUser, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa"; // Importing react-icons

function Navbar() {
	return (
		<>
			<style>
				{`
          .navbar {
            background-color: transparent !important;
          }

          .nav-item {
            position: relative;
            font-size: 1rem;
            margin: 0 5px; 
            font-weight: 600; 
            transition: all 0.5s ease;
            cursor: pointer;
          }
          
          .nav-item::after {
            content: "";
            opacity: 0;
            left: 0;
            bottom: -1px;
            height: 3px;
            width: 0;
            background-color: white;
            position: absolute;
          }
          
          .nav-item:hover::after {
            opacity: 1;
            animation-name: animate1;
            animation-fill-mode: forwards;
            animation-duration: .3s;
            animation-timing-function: ease-in-out;
          }
          
          @keyframes animate1 {
            0% {
              width: 0%;
            }
          
            100% {
              width: 100%;
            }
          }
        `}
			</style>
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						AutoGo
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/availableCars">
									<FaCar /> Browse Listings
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/availableCars">
									<FaCalendarAlt /> My Bookings
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/aboutUs">
									<FaInfoCircle /> About Us
								</Link>
							</li>
						</ul>
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/login">
									<FaSignOutAlt /> Logout
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="#">
									<FaUser /> My Profile
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
