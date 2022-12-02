import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import useTitle from '../../UseTitle/UseTitle';

const MyOrder = () => {
  useTitle('My Order')
  const {user}=useContext(AuthContext)
  const {data:bookings=[]}=useQuery({
    queryKey:['booking',user?.email],
    queryFn:async()=>{
      const res=await fetch(`https://style-world.vercel.app/booking?email=${user.email}`)
      const data =await res.json()
      return data
    }
  })

  
  // cancel booking
  const handleDelete=(_id)=>{
    const agree=window.confirm('Are you sure for delete')
    console.log(agree)
  if(agree){
    fetch(`https://style-world.vercel.app/booking/${_id}`,{
      method:'DELETE',
     headers:{
      'content-type':'application/json'
     },
     body:JSON.stringify()
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)
      if(data.deletedCount>0){
        toast.success('Successfully deleted')
        
      }
  
    })
  }
  
  }


    return (
          
      <div>
        <h1 className='text-3xl  text-center my-5 text-pink-900'>MY Order</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-2'>
          {
            bookings.map(booking=>
              
              <div key={booking._id} className="card w-96 my-4 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={booking.img} alt={booking.name} className="rounded-xl w-52 h-52" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">Product:{booking.name}</h2>
                <p className='text-xl'>Price:${booking.price}</p>
                <p className='text-xl'>Loaction:{booking.location}</p>
                <div className="card-actions">
                  <button className="btn btn-primary w-32">Pay Now</button>
                  <button className="btn btn-primary w-32" onClick={()=>handleDelete(booking._id)}>Cancel</button>
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