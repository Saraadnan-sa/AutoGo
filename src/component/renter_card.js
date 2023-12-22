import React from "react";
import Card from "./renter_cards";
import './card-style.css'
import img1 from '../LOGO.png'
import img2 from '../LOGO.png'
import img3 from '../LOGO.png'
const Cards_renter =()=> {
    return(
    <div className="container-fluid d-flex justify-content-center">
        <div className="row">
            <div className="col-md-4">
                <Card imgsrc={img1} title="ZAINAB ATHAR" data="RENTER 1"/>
            </div>
            <div className="col-md-4">
            <Card imgsrc={img2} title="SARA ADNAN" data="RENTER 2"/>
            </div>
            <div className="col-md-4">
            <Card imgsrc={img3} title="MUHAMMAD MUAZ" data="RENTER 3"/>
            </div>
        </div>
    </div>
    );
}

export default Cards_renter;
