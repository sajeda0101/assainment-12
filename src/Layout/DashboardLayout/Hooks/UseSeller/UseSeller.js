import React, { useEffect, useState } from 'react';

const UseSeller = email => {
    const [isSeller,setIsSeller]=useState(false)
    const [isSellerLoading,setIsSellerLoading]=useState(true)

    useEffect(()=>{
        if(email){
            fetch(`https://style-world.vercel.app/users/seller/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setIsSeller(data.isAdmin)
                setIsSellerLoading(false)
            })
        }
    },[email])

    return [isSeller,isSellerLoading]
};

export default UseSeller;