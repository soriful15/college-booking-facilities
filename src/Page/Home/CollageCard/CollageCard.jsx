import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
const CollageCard = ({collages}) => {
   const {name,admissionDates,events,research,sports,image,_id}=collages
    return (
        <>
             <div>
             <div className="card lg:card-side bg-base-100 shadow-xl lg:h-96">
                    {/* <figure><LazyLoadImage src={chefPicture} className='w-72 h-full' alt="Album" /></figure> */}
                        <img  src={image} className='w-96 h-full rounded-xl' alt="Album" />

                 
                    <div className="card-body">
                        <h2 className="card-title w-full text-blue-700">{name}</h2>
                        <p className='text-green-600'>AdmissionDates: {admissionDates}</p>
                        <p><span className='text-indigo-800'>Event: </span><span className='text-yellow-600'>{events}</span></p>
                        <p><span className='text-lime-700'>Research: </span><span className='text-amber-900'>{research}</span></p>
                        <p><span className='text-red-400'>Sports: </span><span className='text-purple-600'>{sports}</span></p>

                        <div className="card-actions justify-end">
                            <Link to={`/collegeDetails/${_id}`}><button className="btn btn-outline btn-accent"><FaEye className='mr-1'></FaEye>View Details</button></Link>
                        </div>
                    </div>
                </div>
             </div>
        </>
    );
};

export default CollageCard;