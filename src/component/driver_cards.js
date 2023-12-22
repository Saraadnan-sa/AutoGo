import React from "react";
import Card from "./driver_card";
import './card-style.css'
import img1 from '../LOGO.png'
import img2 from '../LOGO.png'
import img3 from '../LOGO.png'

const Cards_driver =()=> {
    return(
    <div className="container-fluid d-flex justify-content-center">
        <div className="row">
            <div className="col-md-4">
                <Card imgsrc={img1} title="ZAINAB ATHAR" data="DRIVER 1"/>

            </div>
            <div className="col-md-4">
            <Card imgsrc={img2} title="SARA ADNAN" data="DRIVER 2"/>
            </div>
            <div className="col-md-4">
            <Card imgsrc={img3} title="MUHAMMAD MUAZ" data="DRIVER 3"/>
            </div>
            <div className="col-md-4">
            <Card imgsrc={img3} title="NAME" data="DRIVER 4"/>
            </div>
        </div>
    </div>
    );
}

export default Cards_driver;
