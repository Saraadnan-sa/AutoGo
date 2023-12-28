import React from 'react';
import SingleCar from '../component/SingleCar';
import Navbar from '../component/Navbar';
import { useParams } from 'react-router-dom'; // Fix the import and use useParams

const SingleCarPage = () => {
    const { id } = useParams(); // Use useParams instead of Params
    return (
        <>
            <Navbar />
            <SingleCar id={id} />
        </>
    );
}

export default SingleCarPage;
