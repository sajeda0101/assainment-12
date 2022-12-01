import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import useTitle from '../../UseTitle/UseTitle';

const MyOrder = () => {
  const products=useLoaderData()
  useTitle('My Order')
const {user}=useContext(AuthContext)

    return (
          
      <div>
        <h1 className='text-3xl  text-center my-5 text-pink-900'>MY Order</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-2'>
          {
            products.map(booking=>
              
              <div key={booking._id} className="card w-96 my-4 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={booking.img} alt={booking.name} className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{booking.name}</h2>
                <p>{booking.price}</p>
                <div className="card-actions">
                  <button className="btn btn-primary w-52">Pay Now</button>
                </div>
              </div>
            </div>
              )
          }
        </div>
                
              
      </div>
    );
};

export default MyOrder;