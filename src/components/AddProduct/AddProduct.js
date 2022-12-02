import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext/UserContext";

const AddProduct = () => {
  const navigate=useNavigate()
  const {user,loading}=useContext(AuthContext)
const imgbbHostKey=process.env.REACT_APP_imgbb_key;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const handleAdd=(productInfo)=>{
 
      fetch("https://style-world-sajeda0101.vercel.app/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productInfo),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast.success("successfully added product");
            navigate('/dashboard/myProduct')
            loading(false)
          } else {
            toast.success("Please add Product");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
     

    }
  return (
   <div className="w-96 mx-auto mt-12">
     <form onSubmit={handleSubmit(handleAdd)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h1 className="text-2xl text-center text-indigo-500">Add Your Product</h1>
        <div className="form-control">
         
          <input
            type="text"
            {...register('seller_name')}
            placeholder="Your name"
            className="input input-bordered  rounded-xl"
            defaultValue={user.displayName}
          />
        </div>
        <div className="form-control">
         
          <input
            type="text"
            {...register('email')}
            placeholder="Your email"
            className="input input-bordered  rounded-xl"
            defaultValue={user.email}
          />
        </div>
        <div className="form-control">
         
          <input
            type="text"
            {...register('name')}
            placeholder="Your product name"
            className="input input-bordered rounded-xl"
            required
          />
        </div>
        <div className="form-control">
         
          <input
            type="text"
            {...register('img')}
            placeholder="Your product img"
            className="input input-bordered rounded-xl"
            required
          />
        </div>
        <div className="form-control">
          
          <input
            type="text"
            {...register('price')}
            placeholder="Product price"
            className="input input-bordered rounded-xl"
            required
          />
        </div>
        <div className="form-control">
          
          <input
            type="text"
            {...register('resale')}
            placeholder="Product resale price"
            className="input input-bordered rounded-xl"
            required
          />
        </div>
        <div className="form-control">
          
          <input
            type="text"
            {...register('location')}
            placeholder="Location"
            className="input input-bordered rounded-xl"
          />
        </div>
        <div className="form-control">
       
          <input
            type="text"
            {...register('description')}
            placeholder="description"
            className="input input-bordered rounded-xl"
            name='description'
            required
          />
        </div>
        <div className="form-control">
     
          <input
            type="text"
            {...register('use')}
            placeholder="Years of purchase"
            className="input input-bordered rounded-xl"
            required
         
          />
        </div>
        <div className="form-control">
   
          <select
          {...register('condition')} 
          className="select  select-bordered  rounded-xl w-full max-w-xs">
            <option disabled selected  required>
              Product Condition
            </option>
            <option >Excellent</option>
            <option  >Good</option>
            <option  >Fair</option>
          </select>
        </div>
        <div className="form-control">
         
          <input
            type="text"
            {...register('phone')}
            placeholder="Your mobile number"
           
            className="input input-bordered rounded-xl"
            required
          />
        </div>
        <div className="form-control">
   
          <select
          {...register('category')}
          className="select   select-bordered  rounded-xl w-full max-w-xs">
            <option disabled selected>
           Product Category
            </option>
            <option >Ladies Collection</option>
            <option >Gents Collection</option>
            <option >Child Collection</option>
          </select>
        </div>
       
    
        <div className="form-control mt-6">
          <button className="btn btn-primary rounded-xl">Add</button>
        </div>
      </div>
    </form>
   </div>
  );
};

export default AddProduct;
