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
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						AutoGo
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">
									Browse Catalog
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#" >
									About Us
								</a>
							</li>

							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">
									My Profile
								</a>
							</li>

						</ul>

					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;