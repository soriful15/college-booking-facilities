import React from 'react';
import customer1 from '../../assets/customerImages/Ellipse 50.png'
import Rating from 'react-rating';
import { FaStar, FaRegStar, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import customer2 from '../../assets/customerImages/Ellipse 51.png'
import customer3 from '../../assets/customerImages/Ellipse 52.png'
const CustomerSay = () => {
    return (
        <>
            <h1 className='mx-auto container text-teal-300 text-3xl mt-20 text-center'>What Customer Are Saying</h1>

            <div className='grid lg:grid-cols-3  md:grid-cols-2 gap-4 mx-auto container mt-10'>



                <div className="card w-96 bg-white border-2 mx-auto border-zinc-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex gap-3'>
                            <img src={customer1} className='w-16 rounded-full' alt="" />

                            <div>
                                <h2 className="card-title">Sarah Thompson</h2>
                                <div className="">

                                    <Rating
                                        placeholderRating={4.5}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>} />

                                </div>
                            </div>
                        </div>
                        <p>Amazing college booking facilities! The online reservation process was quick and straightforward. The campus accommodation was comfortable, and the staff was friendly and helpful throughout our stay"

                        </p>

                        <p className=' flex justify-center md:text-2xl gap-3 mt-6'><FaFacebook></FaFacebook>    <FaInstagram></FaInstagram>  <FaTwitter></FaTwitter> <FaYoutube></FaYoutube> </p>
                    </div>
                </div>



                <div className="card w-96 bg-white border-2 mx-auto border-zinc-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex gap-3'>
                            <img src={customer2} className='w-16 rounded-full h-10' alt="" />

                            <div>
                                <h2 className="card-title">Md Nasim Hosen</h2>
                                <div className="">

                                    <Rating
                                        placeholderRating={4}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>} />

                                </div>
                            </div>
                        </div>
                        <p>Highly recommended college booking services! The event coordination was seamless, and the facilities provided were top-notch. We had a fantastic experience, and the team ensured everything ran smoothly

                        </p>

                        <p className=' flex justify-center text-2xl gap-3 mt-6'><FaFacebook></FaFacebook>    <FaInstagram></FaInstagram>  <FaTwitter></FaTwitter> <FaYoutube></FaYoutube> </p>
                    </div>
                </div>




                <div className="card w-96 bg-white border-2 mx-auto border-zinc-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex gap-3'>
                            <img src={customer3} className='w-16 rounded-full h-10' alt="" />

                            <div>
                                <h2 className="card-title">Md Kamrul Hasan</h2>
                                <div className="">

                                    <Rating
                                        placeholderRating={5}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>} />

                                </div>
                            </div>
                        </div>
                        <p>Outstanding college booking facilities! From the moment we inquired to the end of our event, the support team was professional and accommodating. The campus amenities were impressive, making our stay enjoyable and memorable. 
                        </p>

                        <p className=' flex justify-center text-2xl gap-3 mt-6'><FaFacebook></FaFacebook>    <FaInstagram></FaInstagram>  <FaTwitter></FaTwitter> <FaYoutube></FaYoutube> </p>
                    </div>
                </div>



            </div>



        </>
    );
};

export default CustomerSay;