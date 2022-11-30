import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../components/Pages/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
<Header></Header>   
<div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
<Outlet></Outlet>   
 <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
    
      <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
      <li><Link to='/dashboard/myProduct'>My Product</Link></li>
      <li><Link to='/dashboard/myorder'>My Order</Link></li>
      <li><Link to='/dashboard/allBuyer'>All Buyer</Link></li>
      <li><Link to='/dashboard/allSeller'>All Seller</Link></li>
    </ul>
  
  </div>
</div>   
</div>
    );
};

export default DashboardLayout;