import React, { useState } from 'react';
import './billing.css';

const Billing = () => {
  // State for rental details and options
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [includePetrol, setIncludePetrol] = useState(false);
  const [includeDriver, setIncludeDriver] = useState(false);

  // Constants for pricing
  const baseRentalFee = 50;
  const petrolCost = 20;
  const driverFee = 30;

  // Function to calculate total amount
  const calculateTotalAmount = () => {
    const rentalDuration = calculateRentalDuration();
    let totalAmount = baseRentalFee * rentalDuration;

    if (includePetrol) {
      totalAmount += petrolCost;
    }

    if (includeDriver) {
      totalAmount += driverFee;
    }

    return totalAmount;
  };

  // Function to calculate rental duration in days
  const calculateRentalDuration = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDifference = Math.abs(end - start);
      const rentalDuration = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
      return rentalDuration;
    }
    return 0; // Return 0 if start or end date is not provided
  };

  // Function to handle payment
  const handlePayment = () => {
    // Implement payment logic here
    // This is a placeholder for demonstration purposes
    alert(`Payment Successful! Total Amount: $${calculateTotalAmount()}`);
  };

  return (
    <div class="bill">
      <h2>Billing Information</h2>

      {/* Rental Details */}
      <div class="duration">

        <label>
          Start Date:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>

        <label>
          End Date:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </label>
      </div>

      {/* Rental Options */}
      <div>
        <label>
          Include Petrol:
          <input type="checkbox" checked={includePetrol} onChange={() => setIncludePetrol(!includePetrol)} />
        </label>
        <br />

        <label>
          Include Driver:
          <input type="checkbox" checked={includeDriver} onChange={() => setIncludeDriver(!includeDriver)} />
        </label>
      </div>

      {/* Itemized Charges */}
      <div>
        <h3>Itemized Charges</h3>
        <p>Base Rental Fee: ${baseRentalFee * calculateRentalDuration()}</p>
        {includePetrol && <p>Petrol Cost: ${petrolCost}</p>}
        {includeDriver && <p>Driver Fee: ${driverFee}</p>}
        <p>Total Amount Payable: ${calculateTotalAmount()}</p>
      </div>

      {/* Payment Section */}
      <div>
        <h3>Payment</h3>
        {/* Payment form fields go here */}
        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
};

export default Billing;
