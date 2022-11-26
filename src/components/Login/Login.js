import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import login from '../../assets/login/login.svg'
import google from '../../assets/login/google.png'
import github from '../../assets/login/github.jpg'

import { AuthContext } from '../../Context/UserContext/UserContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const{signIngoogle, signInGithub}=useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const handleSigninGoogle = () => {
      signIngoogle()
        .then(() => {})
        .catch((error) => console.log(error));
    };
  
    // signin by github
    const handleSigninGithuib=()=>{
      signInGithub()
      .then((result)=>{
        toast.success('Successfully login');
        console.log(result.user)
      })
      .catch(err=>console.log(err))
    }
    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:mr-12">
          <h1 className="text-5xl  font-bold mb-4 text-center">Login now!</h1>
         <img src={login} alt="" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />

              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Create a account?
                </Link>
                <Link to="/signup" className="">
                  Signup
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
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Login;