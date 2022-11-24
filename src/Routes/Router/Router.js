import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Login/Login";
import Home from "../../components/Pages/Home/Home";
import Main from "../../Layout/Main/Main";

export const router=createBrowserRouter([
    {path:'/',element:<Main/>,children:[
        {path:'/',element:<Home/>},
        {path:'/login',element:<Login/>}
    ]}
])