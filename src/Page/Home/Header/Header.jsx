import React, { useContext } from 'react';
import logo from '../../../assets/logo/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
const Header = () => {

    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-indigo-100 mx-auto lg:px-28 py-10  mt-6">



            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <NavLink to='/' title='Home Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                            Home
                        </NavLink></li>
                        <li>
                            <NavLink to='/college' title='Collage' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                               Collage
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/admission' title=' Admission' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                            Admission
                            </NavLink>
                        </li>

                        
                               <li>
                                <NavLink to='/myCollage' title='My Collage' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                                    My Collage
                                </NavLink>
                            </li>
                             {/* <li>
                                <NavLink to='/login' title=' Login Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                                    Login
                                </NavLink>
                            </li> */}
                        




                    </ul>
                </div>
                <img className='rounded-full w-20 lg:w-36' src={logo} alt="" />
            
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <NavLink to='/' title='Home Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                        Home
                    </NavLink></li>
                    <li>
                            <NavLink to='/college' title='Collage' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                               Collage
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/admission' title=' Admission' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                            Admission
                            </NavLink>
                        </li>

                  
                             <li>
                                <NavLink to='/myCollage' title='My Collage' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                                    My Collage
                                </NavLink>
                            </li>
                        {/* <li>
                            <NavLink to='/login' title=' Login Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                                Login
                            </NavLink>
                        </li> */}
                    

                </ul>
            </div>
            {
                user ? <>

                    <div className="navbar-end ">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img data-toggle="tooltip"
                                        title={user && user.displayName} src={user && user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                    </a>
                                </li>
                                <li><Link to='/login' className='font-bold' onClick={handleLogOut}>Logout</Link></li>
                            </ul>
                        </div>
                    </div> </>
:   <li>
                            <NavLink to='/login' title=' Login Link' className={({ isActive }) => isActive ? "text-blue-600" : ''}>
                                Login
                            </NavLink>
                        </li>
               
            }


        </div>
    );
};

export default Header;