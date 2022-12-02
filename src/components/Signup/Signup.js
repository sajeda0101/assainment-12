import React, { useContext, useState } from "react";
import google from "../../assets/login/google.png";
import github from "../../assets/login/github.jpg";
import login from "../../assets/login/login.svg";
import { AuthContext } from "../../Context/UserContext/UserContext";
import useTitle from "../UseTitle/UseTitle";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  useTitle('Signup')
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || '/';

  const {  createUser, updateUser, signIngoogle, loading, signInGithub } =
    useContext(AuthContext);

  useTitle("Signup");
  const handlesignup = (userInfo) => {

    const name=userInfo.name
  
    // createUser  by password and email
    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        ;
        
        updateUser(name)
          .then(() => {
            
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));

      // user create
      fetch("https://style-world-sajeda0101.vercel.app/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((response) => response.json())
        .then((data) => {
          
          // getUserToken(userInfo.email)
          if (data.acknowledged) {
            toast.success("Successfully signup")   
            navigate(from,{replace:true})         
          } else {
            toast.success("Please ");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
  };


  const handleSigninGoogle = () => {
    signIngoogle()
      .then((result) => {
        console.log(result.user);
        
        toast.success("Successfully signin by google");
      })
      .catch((error) => console.log(error));
  };
  // signin by github
  const handleSigninGithuib = () => {
    signInGithub()
      .then((user) => {
        toast.success("Successfully signin by github");
        console.log(user.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:mr-12">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Please Signup Now!
          </h1>
          <img src={login} alt="" />
        </div>
        <form
          onSubmit={handleSubmit(handlesignup)}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                {...register("name", { required: "Name is required" })}
                className="input input-bordered  rounded-xl"
              />
                  {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required:true})}
                className="input input-bordered  rounded-xl"
                
              />
                  {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
                placeholder="password"
                className="input input-bordered  rounded-xl"
              />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
              </div>

              <div className="form-control">
   
   <select
   {...register('role')} 
   className="select  select-bordered  rounded-xl w-full max-w-xs">
     <option disabled selected  required>
      user Type
     </option>
     <option >Buyer</option>
     <option  >Seller</option>
    
   </select>
 </div>
              <div>

              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Already have a account?
                </Link>
                <Link to="/login" className="text-indigo-400">
                  Login
                </Link>
              </label>
            </div>
            <p className="text-3xl text-center">Or</p>
            <hr className="py-2" />

            <div className="flex">
              <button
                onClick={handleSigninGoogle}
                className="border border-secondary w-2/5 mx-auto rounded px-3"
              >
                <img
                  src={google}
                  alt=""
                  style={{ height: "40px" }}
                  className=" mx-auto"
                />
              </button>

              <button
                onClick={handleSigninGithuib}
                className="border border-secondary w-2/5 mx-auto rounded px-3"
              >
                <img
                  src={github}
                  alt=""
                  style={{ height: "40px" }}
                  className=" mx-auto"
                />
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary  rounded-xl">Signup</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
