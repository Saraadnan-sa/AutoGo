import React from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5 text-center">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h1 className="display-4 text-danger">404</h1>
                        <p className="lead">Oops! The page you're looking for doesn't exist.</p>
                        <p>It seems like you've taken a wrong turn.</p>
                        <Link to="/" className="btn btn-primary mt-3">
                            Go Back Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;
