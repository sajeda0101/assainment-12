import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from './Products/Booking Modal/BookingModal';

const SecondHandProducts = () => {
    const [categories,setCategories]=useState([])

    useEffect(()=>{
        fetch('https://style-world.vercel.app/category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
   

    return (
        <div className='bg-indigo-200 w-5/6 mx-auto rounded  p-9 my-12'>
            <h1 className='lg:text-4xl text-2xl text-center text-violet-800 font-bold'>Our Second Hand Products</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
           {
                categories.map(category=>
                    <div key={category._id} className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={category.img} alt="Shoes" className="w-36 rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{category.category_name}</h2>
    <p>Choose your collection what you want to buy.</p>
    <div className="card-actions">
<Link to={`/category/${category.category_id}`}><button  className="btn btn-light rounded-xl text-white">See Collection</button></Link>
    </div>
  </div>
</div>
                
                    )
            } 
           </div>
            

        </div>
    );
};

export default SecondHandProducts;