import { confirmPasswordReset } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../../Context/UserContext/UserContext';
import useTitle from '../../../../UseTitle/UseTitle';
import BookingModal from './Booking Modal/BookingModal';

const Products = () => {
  useTitle('Second hand product')
  const products=useLoaderData()
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
{
  products.map(product=>
  
    <div className="card w-96 bg-base-100 mx-auto shadow-xl lg:h-4/5 mt-12"  key={product._id}>
    <figure className="px-10 pt-10">
      <img src={product.img} alt={product.name} className="rounded-xl  " />
    </figure>
    <div className="card-body ">
      <h2 className="card-title">{product.name}</h2>
      <p>Original Price:{product.price}</p>
      <p>Resale Price:{product.resale}</p>
      <p>Location:{product.location}</p>
      <p>Use of product:{product.use}</p>
      <p>Posted:{product.post_time}</p>
      <p>Seller Name:{product.seller_name}</p>
      <div className="card-actions">
        <label htmlFor="booking-modal" className="btn w-72 text-white  rounded-xl">Book Now</label>
  <BookingModal product={product}></BookingModal>
      </div>
    </div>
  </div>
  
  )
}

</div>
     
    );
};

export default Products;