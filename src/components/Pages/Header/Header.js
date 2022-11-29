import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../../assets/homepageImg/logo.png'
import { AuthContext } from '../../../Context/UserContext/UserContext';
const Header = () => {
  const {user,logOut}=useContext(AuthContext)
 
  const handleLogout=()=>{
    logOut()
    .then(toast.success('User Logged Out'))
    .catch(err=>console.log(err))
  }
    const menuItem=<>
        <li ><Link to='/' className='   hover:bg-indigo-600 hover:text-white rounded'>Home</Link></li>
        <li><Link to='/blog' className='  hover:bg-indigo-600 hover:text-white rounded'>Blog</Link></li>
    <li> <Link to='/dashboard' className='  hover:bg-indigo-600 hover:text-white rounded'>Dashboard</Link></li>

 
      {
        user?.uid?        
       <>
       <li><Link to='/addProduct' className='  hover:bg-indigo-600 hover:text-white rounded'>Add Product</Link></li>
        <li><Link to='/myProduct' className='  hover:bg-indigo-600 hover:text-white rounded'>My Product</Link></li>
     <li> <button className='  hover:bg-indigo-600 hover:text-white rounded' onClick={handleLogout}>Logout</button></li>
       </> 
        
        :
        <li><Link to='/login' className=' mr-1 text-xl hover:bg-indigo-600 hover:text-white rounded'>Login</Link></li>
       }

    </>
    return (
        <div className="navbar bg-slate-200 lg:px-24 text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2  rounded bg-slate-200  w-52">
        {menuItem}
      </ul>
    </div>
    <p className='text-3xl font-bold px-12 flex justify-center items-center'>
      <img src={logo} alt="" className=' mr-2  w-16 h-16 rounded-full' />
      StyleWorld</p>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal p-0 ">
    {menuItem}
    </ul>
  </div>
  <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden ml-20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
</div>
    );
};

export default Header;