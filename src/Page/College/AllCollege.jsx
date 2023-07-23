import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
const AllCollege = ({collages}) => {
    const { name, admissionDates, events, research, sports, image, _id } = collages
    return (
        <>
            <div className="card w-full md:w-96 bg-base-100 shadow-xl ">
                <figure><img src={image} className='h-72 w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-blue-700">{name}</h2>
                    <p ><span className='text-green-600'>AdmissionDates:</span> {admissionDates}</p>
                        <p><span className='text-indigo-800'>Event: </span><span >{events}</span></p>
                        <p><span className='text-lime-700'>Research: </span><span className=''>{research}</span></p>
                        <p><span className='text-red-400'>Sports: </span><span className=''>{sports}</span></p>
                    <div className="card-actions justify-end">
                    <Link to={`/collegeDetails/${_id}`}><button className="btn btn-outline btn-accent"><FaEye className='mr-1'></FaEye>View Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllCollege;