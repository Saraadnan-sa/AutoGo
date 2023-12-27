import React, { useState } from "react";

const radioInlineStyle = {
  display: "inline-block",
  marginRight: "10px",
};

const radioInputStyle = {
  marginRight: "5px",
};

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    address: "",
    phoneNumber: "",
    cnic: "",
    age: "",
    userType: "", // Added userType to store the selected option
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can send formData to your backend or perform any other action.
    console.log(formData);
  };

  const handleUserTypeChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      // Reset the last two inputs when changing user type
      ratePerHour: "",
      driverType: "",
    }));
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userType" className="form-label">
            Select User Type:
          </label>
          <div style={radioInlineStyle}>
            <input
              type="radio"
              id="driver"
              name="userType"
              value="driver"
              onChange={handleUserTypeChange}
              checked={formData.userType === "driver"}
              style={radioInputStyle}
            />
            <label htmlFor="driver">Driver</label>
          </div>
          <div style={radioInlineStyle}>
            <input
              type="radio"
              id="renter"
              name="userType"
              value="renter"
              onChange={handleUserTypeChange}
              checked={formData.userType === "renter"}
              style={radioInputStyle}
            />
            <label htmlFor="renter">Renter</label>
          </div>
          <div style={radioInlineStyle}>
            <input
              type="radio"
              id="rentee"
              name="userType"
              value="rentee"
              onChange={handleUserTypeChange}
              checked={formData.userType === "rentee"}
              style={radioInputStyle}
            />
            <label htmlFor="rentee">Rentee</label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Name
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cnic" className="form-label">
            CNIC
          </label>
          <input
            type="text"
            className="form-control"
            id="cnic"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        {/* Additional inputs for driver */}
        {formData.userType === "driver" && (
          <>
            <div className="mb-3">
              <label htmlFor="driverType" className="form-label">
                Type of Driver (HTV, LTV)
              </label>
              <input
                type="text"
                className="form-control"
                id="driverType"
                name="driverType"
                value={formData.driverType || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ratePerHour" className="form-label">
                Rate Per Hour
              </label>
              <input
                type="text"
                className="form-control"
                id="ratePerHour"
                name="ratePerHour"
                value={formData.ratePerHour || ""}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignupForm;