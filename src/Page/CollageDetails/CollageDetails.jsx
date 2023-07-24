// import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollageDetails = () => {
    const collegeDetails = useLoaderData()
    console.log(collegeDetails)
    const { name, admissionDates, events, research, sports, image, history, ratings } = collegeDetails
    return (
        <>
            <div className='container mx-auto mt-16 max-w-7xl'>


                <div className="card lg:card-side bg-base-100 shadow-xl lg:h-[600px]">
                    <img src={image} className=' lg:h-[600px] lg:w-[600px]' alt="Album" />
                    <div className="card-body">
                        <h2 className="card-title font-bold">Name:{name}</h2>
                        <p className='text-sm text-amber-800'>AdmissionDates:{admissionDates}</p>
                        <p className='text-xl text-emerald-950'>Events:{events}</p>
                        <p className='text-lg text-purple-900 font-semibold'>Research:{research}</p>
                        <p className='font-bold text-sky-900'>Sports:{sports}</p>
                        <p className='font-normal text-lg text-green-800'>History: {history}</p>
                        <p className='font-normal text-lg text-yellow-600'>Rating: {ratings}</p>
                        {/* <div className=''>
                            <Rating style={{ maxWidth: 50 }} className='flex text-orange-900' value={Math.round(ratings) || 0} readOnly /><span className='ms-2'> {ratings}</span>
                        </div> */}
                    </div>
                </div>

            </div>
        </>
    );
};

export default CollageDetails;
