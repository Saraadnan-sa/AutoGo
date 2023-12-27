import React from "react";

const Cards_car = () => (
  <div className="card mb-3 mx-auto" style={{ maxWidth: "70%" }}>
    <div className="row g-0">
      <div className="col-md-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_KSHiEyacGfqluGt3Y2wavp9LjEoKdTP8H9td-uZq0PBkJHIn38ijNan4LSrnB9WVXI&usqp=CAU"
          className="img-fluid rounded-start"
          alt="Card"
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">CAR 1</h5>
          <p className="card-text">
            Information of the car in one line
          </p>
          <button type="button" class="btn btn-secondary">Read More</button>
        </div>
      </div>

      
    </div>
  </div>

  

  
);

export default Cards_car;
