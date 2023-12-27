import React from "react";
import Card from "./rentee_card";
import './card-style.css'
import img1 from '../LOGO.png'
import img2 from '../LOGO.png'
import img3 from '../LOGO.png'
import fetchData from "../utility/fetchData";
import { useEffect } from "react";

const Cards_rentee = () => {

	useEffect(() => {
		const response = fetchData('')
	}, [])

	return (
		<div className="container-fluid d-flex justify-content-center">
			<div className="row">
				<div className="col-md-4">
					<Card imgsrc={img1} title="ZAINAB ATHAR" data="RENTEE 1" />

				</div>
				<div className="col-md-4">
					<Card imgsrc={img2} title="SARA ADNAN" data="RENTEE 2" />
				</div>
				<div className="col-md-4">
					<Card imgsrc={img3} title="MUHAMMAD MUAZ" data="RENTEE 3" />
				</div>
				<div className="col-md-4">
					<Card imgsrc={img3} title="NAME" data="RENTEE 4" />
				</div>
			</div>
		</div>
	);
}

export default Cards_rentee;
