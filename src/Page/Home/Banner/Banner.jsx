
import React from 'react';
import banner1 from '../../../assets/banner/banner-1.jpg'
import banner2 from '../../../assets/banner/banner-2.webp'
import banner3 from '../../../assets/banner/banner-3.webp'

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] mt-14 lg:container mx-auto lg:ml-44">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full rounded-2xl " />
        <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0   rounded-2xl  ">
          <div className='space-y-7 md:w-1/2 md:pl-12 pl-5 '>
            <h2 className='text-xl lg:text-6xl font-bold text-indigo-800'> Collage booking facilities </h2>
            <p className='lg:text-2xl font-normal text-lime-600'>Collage booking facilities provide a convenient and efficient way for students to reserve or schedule their desired courses and activities in their academic journey.</p>
            <div className='md:flex md:gap-5'>

              <button className="btn  btn-success ml-2">Latest Course</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-outline">❮</a>
          <a href="#slide2" className="btn btn-outline ">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full rounded-2xl" />
        <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0   rounded-2xl">
          <div className='space-y-7 md:w-1/2 md:pl-12 pl-5 '>
            <h2 className='text-xl lg:text-6xl font-bold text-indigo-800'> Collage booking facilities </h2>
            <p className='lg:text-2xl font-normal text-lime-600'>Collage booking facilities provide a convenient and efficient way for students to reserve or schedule their desired courses and activities in their academic journey.</p>
            <div className='md:flex md:gap-5'>

              <button className="btn  btn-success ml-2">Latest Course</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-outline">❮</a>
          <a href="#slide3" className="btn btn-outline">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full rounded-2xl" />
        <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0   rounded-2xl">
          <div className='space-y-7 md:w-1/2 md:pl-12 pl-5 '>
            <h2 className='text-xl lg:text-6xl font-bold text-indigo-800'> Collage booking facilities </h2>
            <p className='lg:text-2xl font-normal text-lime-600'>Collage booking facilities provide a convenient and efficient way for students to reserve or schedule their desired courses and activities in their academic journey.</p>
            <div className='md:flex md:gap-5'>

              <button className="btn  btn-success ml-2">Latest Course</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-outline">❮</a>
          <a href="#slide1" className="btn btn-outline">❯</a>
        </div>
      </div>
   
    </div>



  );
};

export default Banner;