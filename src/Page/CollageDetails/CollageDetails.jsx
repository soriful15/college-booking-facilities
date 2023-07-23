import React from 'react';
import { Rating } from '@smastrom/react-rating';
import { useLoaderData } from 'react-router-dom';

const CollageDetails = () => {
    const collegeDetails=useLoaderData()
    console.log(collegeDetails)
    const {name,admissionDates,events,research,sports,image,history,ratings}=collegeDetails
    return (
        <>
             <div className='container mx-auto mt-16 max-w-7xl'>


<div className="card lg:card-side bg-base-100 shadow-xl lg:max-w-7xl lg:max-h-96 ">
    <figure><img src={image} className='w-full h-full' alt="Album" /></figure>
    <div className="card-body">
        <h2 className="card-title font-bold">Name:{name}</h2>
        <p className='text-sm text-amber-800'>AdmissionDates:{admissionDates}</p>
        <p className='text-xl text-emerald-950'>Events:{events}</p>
        <p className='text-lg text-purple-900 font-semibold'>Research:{research}</p>
        <p className='font-bold text-sky-900'>Sports:{sports}</p>
        {/* <p className='font-bold text-indigo-900'>Quantity:{quantity}</p> */}

        <p className='font-normal text-lg text-green-800'>History: {history}</p>
        <div className='flex  items-center'>
            <Rating style={{ maxWidth: 150 }} value={Math.round(ratings) || 0} readOnly /><span className='ms-2'> {ratings}</span>
        </div>
    </div>
</div>

</div>
        </>
    );
};

export default CollageDetails;