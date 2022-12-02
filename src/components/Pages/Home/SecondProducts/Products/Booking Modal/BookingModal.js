import React, { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../../../Context/UserContext/UserContext";
import useTitle from "../../../../../UseTitle/UseTitle";

const BookingModal = ({product}) => {
  useTitle('Booking Modal')
  const {user}=useContext(AuthContext);
  const [productName,setProductName]=useState(null)
  
  const submitBooking=(e)=>{
      e.preventDefault()
      const form=e.target;
      const number=form.phone.value;
      const location=form.location.value
      const userName=user.displayName;
      const email=user.email
      const  name=product.name;
      const product_id=product._id
      const  price=product.resale;
      const img=product.img;
    

    const booking = {
      product_id,
    name,
     number,
      userName,
      email,
      price,
      location,
      img
     
    };
    
   
    fetch("https://style-world.vercel.app/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset()
          setProductName(null)
          toast.success("successfully added booked");
        } else {
          toast.success("Please Book Product");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  };
  
  return (
    <>
     

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={submitBooking} className="card flex-shrink-0 w-full max-w-sm shadow bg-base-100">
            <div className="card-body">
              <h1 className="text-2xl text-center mb-3">Booking Info</h1>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered  rounded-xl"
                  defaultValue={user.displayName}
                
          />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered  rounded-xl"
                  defaultValue={user.email}
              
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered  rounded-xl"
                  defaultValue={product.name}
                  
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Product Image"
                  className="input input-bordered  rounded-xl"
                  defaultValue={product.img}
                  
                />
              </div>
              <div className="form-control">

                <input
                  type="text"
                  placeholder="Product Price"
                  className="input input-bordered  rounded-xl"
                  defaultValue={product.resale}
                  required
                  ></input>
                  </div>

                  <div className="form-control">
                <input
                  type="number"
                  placeholder="Your Number"
                  name="phone"
                  className="input input-bordered  rounded-xl"
                  required
                />
            
              </div>
              
              <div className="form-control">
              
                <input
                  type="text"
                  name='location'
                  placeholder="Meeting Location"
                  className="input input-bordered  rounded-xl"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-indigo-900  rounded-xl text-xl text-white">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
