import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/UserContext/UserContext";
import useTitle from "../../UseTitle/UseTitle";

const MyProduct = () => {
  // const products = useLoaderData();
  useTitle("My product");
  const { user } = useContext(AuthContext);
  const {data:products=[]}=useQuery({
    queryKey:['products',user?.email],
    queryFn:async()=>{
      const res=await fetch(`https://style-world-sajeda0101.vercel.app/addProduct?email=${user.email}`)
      const data =await res.json()
      return data
    }
  })

  const handleDelete=(_id)=>{
    const agree=window.confirm('Are you sure for delete')
    console.log(agree)
  if(agree){
    fetch(`https://style-world-sajeda0101.vercel.app/addProduct/${_id}`,{
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
      <h1 className="text-3xl text-center my-3">My Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
     {
      products.map(product=>
        <div key={product._id} className="card w-96 mx-auto bg-base-100 shadow-xl my-3">
        <figure>
          <img src={product.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>Price:{product.price}</p>
          <p>Sales Status:avaiable</p>
          <p>{product.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary w-52 mx-auto" onClick={()=>handleDelete(product._id)}>Delete</button>
          </div>
        </div>
      </div>
        )
     }
      </div>
    </div>
  );
};

export default MyProduct;
