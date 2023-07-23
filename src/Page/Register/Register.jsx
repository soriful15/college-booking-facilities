import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react'
import register from '../../assets/112454-form-registration.json'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/UseTitle';
import { AuthContext } from '../../Provider/AuthProvider';
const Register = () => {
    useTitle('Register')
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        setSuccess('')
        setError('')
        const form = e.target;
        const name = form.name.value
        const password = form.password.value
        const email = form.email.value
        const photo = form.photo.value
        // console.log(name, photo, email, password)
        //  Validate input
        if (!password || !name || !email || !photo) {
            setError("Please fill the from");
        }
        if (!email.trim()) {
            setError("Eamil is required");
        }
        if (!password.trim()) {
            setError("password is required");
        }
        if (password.trim().length < 6) {
            setError("Password must be at least 6 characters");
        }


        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                setError('')
                setSuccess(toast('User has created successfully'))
                form.reset()
                console.log(createdUser)
                navigate('/')

                updateUserProfile(name, photo, email)
                    .then(() => {
                        console.log('update Profile')
                    })
                    .catch((error) => {
                        console.log(error.message)

                    })


            })
            .catch((error) => {
                console.log(error.message)
                setError(error.message)
            })

    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <div className=''>
                            <div className='w-96'>
                                <Lottie animationData={register} loop={true} />
                            </div>
                        </div>
                    </div>
                    <div onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Enter your Photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                               
                            </div>
                            <p className='text-yellow-400 text-center mb-2 px-4 font-bold text-xl'>{error}</p>
                            <p className='text-green-600 px-4 text-center mb-2 font-bold text-xl'>{success}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-active">Register</button>
                            </div>
                            <p className='text-center'>AlReady have an Account? <Link to='/login'><span className='text-green-500'>login</span></Link></p>
                        </form >
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;