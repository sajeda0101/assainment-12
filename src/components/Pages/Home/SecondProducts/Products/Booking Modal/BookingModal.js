import React, { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../../../Context/UserContext/UserContext";

const BookingModal = ({product}) => {
  const {user}=useContext(AuthContext)
  
  const submitBooking=(e)=>{
      e.preventDefault()
      const form=e.target;
      const number=form.phone.value;
      const location=form.location.value
    
    const booking = {
      product_id:product._id,
      product_name:product.name,
     number,
      userName:user.displayName,
      email:user.email,
      product_price:product.resale,
      location
     
    };
   
    fetch("https://style-world.vercel.app/booked", {
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
                  required
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
