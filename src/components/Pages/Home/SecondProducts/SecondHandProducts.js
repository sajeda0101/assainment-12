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
    // console.log(categories)

    return (
        <div className='bg-indigo-200 w-5/6 mx-auto rounded  p-9 my-12'>
            <h1 className='lg:text-4xl text-2xl text-center text-violet-800 font-bold'>Our Second Hand Products</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
           {
                categories.map(category=><div key={category._id} className='mt-12 py-3 mx-auto'>
                    <Link to={`/category/${category._id}`} className="rounded  bg-pink-400 text-xl p-6  text-white">{category.category_name}</Link>
                </div> )
            } 
           </div>
            

        </div>
    );
};

export default SecondHandProducts;