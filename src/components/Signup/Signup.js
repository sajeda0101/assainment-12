import React, { useContext } from 'react';
import google from '../../assets/login/google.png'
import github from '../../assets/login/github.jpg'
import login from '../../assets/login/login.svg'
import { AuthContext } from '../../Context/UserContext/UserContext';
import useTitle from '../UseTitle/UseTitle';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Signup = () => {
    const {
        user,
        createUser,
        updateUser,
        signIngoogle,
        loading,
        signInGithub
      } = useContext(AuthContext);
 
useTitle('Signup')    
      const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value
        const photoURL=form.photoURL.value || 'No photo found'
       
    
        // createUser  by password and email
        createUser(email,password)
        .then(result=>{
          const user=result.user
          console.log(user);
          toast.success('Successfully signup')
          form.reset()
          updateUser(name,photoURL)
          .then(()=>{})
          .catch(error=>console.log(error))
        })
        .catch(error=>console.log(error))
    
      }
      const handleSigninGoogle = () => {
        signIngoogle()
          .then((result) => {
            console.log(result.user)
            toast.success('Successfully signin by google')
          })
          .catch((error) => console.log(error));
      };
      // signin by github
      const handleSigninGithuib=()=>{
        signInGithub()
        .then((user)=>{
          toast.success('Successfully signin by github')
          console.log(user.user)
        })
        .catch(err=>console.log(err))
      }
    
        return (
          <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:mr-12">
              <h1 className="text-5xl font-bold mb-4 text-center">Please Signup Now!</h1>
             <img src={login} alt="" />
            </div>
            <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="name" name="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input type="text" placeholder="photoURL" name="photoURL" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" name="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name='password' placeholder="password" className="input input-bordered" />
                 
                  <label className="label">
                    <Link className="label-text-alt link link-hover">Already have a account?</Link>
                    <Link to='/login'>Login</Link>
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
                  <button className="btn btn-primary">Signup</button>
                </div>
              </div>
            </form>
          </div>
        </div>
    
        );
};

export default Signup;