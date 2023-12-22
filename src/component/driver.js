import "./driver.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
function driver() {
  return (
    <>
      <body>

        <div class="main">

            <div class="left">
                <div class="title">
                    <h1>DRIVER</h1>
                </div>
                 <div class="desc">
                   <div>
                   <FontAwesomeIcon icon={faPhone} /> contact</div>
                   <hr />
                   <div><FontAwesomeIcon icon={faHouse} /> Address</div>
                   <hr />
                   <div><FontAwesomeIcon icon={faIdCard} /> Cnic</div>
                   <hr />
                   <div><FontAwesomeIcon icon={faUser} /> Age</div>
                   <hr />
                   <div><FontAwesomeIcon icon={faCar} /> <a href="renter_cars.js">Appointment</a></div>
                   <hr />
                   <button>EDIT</button>
                   <hr />
                </div>
                
                
            </div>

            <div class="right">
                <div class="image">
               
                </div>

                <div class="info">
                    <h3>Maxwell </h3>
                    <a href="mailto:sghori.bese22seecs@seecs.edu.pk"><h5>Driver Email</h5></a>
                </div>
            </div>

        </div>

    </body>
    </>
  );
}

export default driver;



