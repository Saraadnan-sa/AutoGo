import React from "react";
import Navbar from "../component/Navbar";

const AboutUsPage = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-5 text-white p-4">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center">
                        <h2 className="mb-4 text-primary">About Us</h2>
                        <p className="">
                            Welcome to <span className="text-primary fw-bold">AutoGo</span>, where your journey begins. We redefine the way you travel by providing seamless and affordable car rental solutions.
                        </p>
                        <p className="">
                            At <span className="text-primary fw-bold">AutoGo</span>, we believe in simplicity, quality, and your satisfaction. Whether it's a quick commute or a weekend getaway, we've got your ride covered.
                        </p>
                        <h4 className="mt-4 text-primary">Why Choose <span className="fw-bold">AutoGo</span>?</h4>
                        <ul className="list-unstyled ">
                            <li>
                                <strong>Varied Fleet:</strong> Explore a diverse range of vehicles tailored to your needs, from sleek city cars to spacious SUVs.
                            </li>
                            <li>
                                <strong>Easy Booking:</strong> Enjoy a straightforward booking process without hidden fees. Your ride is just a few clicks away.
                            </li>
                            <li>
                                <strong>Customer-Focused:</strong> Our dedicated team ensures your satisfaction. Experience hassle-free journeys with our excellent customer service.
                            </li>
                            <li>
                                <strong>Flexible Options:</strong> Choose from hourly, daily, or extended rentals. We adapt to your schedule for a stress-free experience.
                            </li>
                        </ul>
                        <h4 className="mt-4 text-primary">Contact Us</h4>
                        <p className="">
                            Have questions or need assistance? Reach out to our friendly support team at <span className="fw-bold">support@AutoGo.com</span> or call us at <span className="fw-bold">123-456-7890</span>.
                        </p>
                        <p className="">
                            Thank you for choosing <span className="text-primary fw-bold">AutoGo</span> as your travel companion. Let's make every journey memorable!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsPage;
