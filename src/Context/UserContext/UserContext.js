import React, { createContext, useEffect, useState } from 'react';
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, FacebookAuthProvider, signOut, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import app from '../../firebase/firebase.config'

export const AuthContext=createContext()
const auth=getAuth(app)
const UserContext = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    // provider
const googleProvider=new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();

// create user
const createUser=(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
// update user name
const updateUser=(name,photoURL)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photoURL
    })
}

// signIngoogle
const signIngoogle=()=>{
    return signInWithPopup(auth,googleProvider)

}

// signIn by github
const signInGithub=()=>{
    return signInWithPopup(auth,githubProvider)
}


// logout
const logOut=()=>{
    setLoading(true)
   return signOut(auth)
}

// login
const signin=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}



useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return unsubscribe();
},[])




   
 const authInfo={user,createUser,updateUser,signInGithub,loading,signin,logOut,signIngoogle}
return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default UserContext;