import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../../components/UseTitle/UseTitle';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const AllSeller = () => {
    const {user}=useContext(AuthContext)
    const [sellers,setSeller]=useState([])
    console.log(sellers)

    useEffect(()=>{
        fetch(`https://style-world-sajeda0101.vercel.app/users?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setSeller(data))
    },[user.email])
   
      return (
        <div>
           
               
        </div>
      )
    ;
};

export default AllSeller;