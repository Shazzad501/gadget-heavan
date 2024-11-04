import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className='sticky top-0 z-50 bg-white'>
          <div className={`navbar py-3 w-11/12  mx-auto  ${pathname === '/' ? "bg-[#9538E2] rounded-t-xl" : 'bg-white'}`}>
        <div className="navbar-start">
          <a className={`font-bold text-2xl ml-2  ${pathname === '/' ? "text-white" : 'text-black'}`}>Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className={`menu menu-horizontal px-1 flex gap-5 ${pathname === '/' ? "text-white" : ''}`}>
            <NavLink className={`font-bold text-base  ${pathname === '/' ? "text-white" : 'text-black'}`} to='/'>Home</NavLink>
            <NavLink className={`font-bold text-base  ${pathname === '/' ? "text-white" : 'text-black'}`} to='/statistics'>Statistics</NavLink>
            <NavLink className={`font-bold text-base  ${pathname === '/' ? "text-white" : 'text-black'}`} to='/dashboard'>Dashboard</NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <div className='flex gap-4'>
          <Link className="btn font-bold text-lg rounded-full bg-white text-black"><i className="fa-solid fa-cart-shopping"></i></Link>
          <Link className="btn font-bold text-lg rounded-full bg-white text-black"><i className="fa-regular fa-heart"></i></Link>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 gap-3 shadow">
                <NavLink className='font-bold text-base text-black' to='/'>Home</NavLink>
                <NavLink className='font-bold text-base text-black' to='/statistics'>Statistics</NavLink>
                <NavLink className='font-bold text-base text-black' to='/dashboard'>Dashboard</NavLink>
            </ul>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Navbar;