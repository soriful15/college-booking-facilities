import React from 'react';
import Header from '../Page/Home/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Home/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <ToastContainer></ToastContainer>
            <div className='min-h-[calc(100vh-250px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;