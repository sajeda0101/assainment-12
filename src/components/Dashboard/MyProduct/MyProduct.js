import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/UserContext/UserContext";
import Products from "../../Pages/Home/SecondProducts/Products/Products";
import useTitle from "../../UseTitle/UseTitle";

const MyProduct = () => {
  const products = useLoaderData();
  useTitle("My product");
  const { user } = useContext(AuthContext);

  const handleDelete=(_id)=>{
    const agree=window.confirm('Are you sure for delete')
    console.log(agree)
  if(agree){
    fetch(`http://localhost:5000/addProduct/${_id}`,{
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
