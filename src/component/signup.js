
import React, { useState } from "react";
<<<<<<< HEAD
function SignupForm() {
    const [formData, setFormData] = useState({
      name: "",
      password: "",
      email: "",
      address: "",
      phoneNumber: "",
      cnic: "",
      age: "",
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
 
=======

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    address: "",
    phoneNumber: "",
    cnic: "",
    age: "",
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

>>>>>>> origin/main
  return (
    <div className="wrapper">
      <form action="">
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
<button type="submit" className="btn btn-primary">
Signup
</button>
 </form>
 </div>
);
}

<<<<<<< HEAD
export default SignupForm;
=======
export default Signup;
>>>>>>> origin/main
