import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../../components/Errorpage/Errorpage";
import Login from "../../components/Login/Login";
import Home from "../../components/Pages/Home/Home";
import Products from "../../components/Pages/Home/SecondProducts/Products/Products";
import SecondHandProducts from "../../components/Pages/Home/SecondProducts/SecondHandProducts";
import Main from "../../Layout/Main/Main";

export const router=createBrowserRouter([
    {path:'/',errorElement:<Errorpage/>,element:<Main/>,children:[
        {path:'/',element:<Home/>},
        {path:'/login',element:<Login/>},
        {path:'/category',element:<Products/>}
    ]}
])