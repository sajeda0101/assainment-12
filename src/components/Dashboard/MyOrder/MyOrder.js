import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const MyOrder = () => {
const {user}=useContext(AuthContext)
const [products,setProduct]=useState([])
console.log(products
    )

      // specific data get by match email
      // const url=`http://localhost:5000/booking?email=${user?.email}`
      // const {data:bookings=[]}=useQuery({
      //   queryKey:['booking',user?.email],
      //   queryFn:async()=>{
      //       const res=await fetch(url)
      //       const data=await res.json()
      //       return data
      //   }
      // })

      useEffect(() => {
    fetch(`http://localhost:5000/booking?email=${user.email}`,{
      headers:{
        authorization:`bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((res) => res.json())
    .then((data) => setProduct(data));
  }, [user.email]);
    return (
          
      <div>
        <h1 className='text-3xl  text-center my-5 text-pink-900'>MY Product</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-2'>
          {
            products.map(booking=>
              
              <div className="card w-96 bg-base-100 shadow-xl">
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