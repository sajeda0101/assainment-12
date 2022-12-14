import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import useTitle from "../../../components/UseTitle/UseTitle";

const AllBuyer = () => {
  useTitle('All Buyer')
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://style-world-sajeda0101.vercel.app/users");
      const data = await res.json();
      return data;
    },
    
  });

//   delete seller
  const handleDelete=(_id)=>{
    const agree=window.confirm('Are you sure for delete')
    console.log(agree)
  if(agree){
    fetch(`https://style-world-sajeda0101.vercel.app/users/${_id}`,{
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
        <h1 className='text-3xl text-center my-6'>All Buyer</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Name</th>
              <th>Email</th>
             
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr>
                <th>
                  <label>{i + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <h1 className="text-xl">{user.name}</h1>
                  </div>
                </td>
                <td>
                  <p>{user.email}</p>
                </td>

                <th>
                  <button onClick={()=>handleDelete(user._id)} className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyer;
