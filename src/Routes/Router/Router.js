import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Dashboard from "../../components/Dashboard/Dashboard";
import Errorpage from "../../components/Errorpage/Errorpage";
import Login from "../../components/Login/Login";
import Home from "../../components/Pages/Home/Home";
import Products from "../../components/Pages/Home/SecondProducts/Products/Products";
import Signup from "../../components/Signup/Signup";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";

export const router=createBrowserRouter([
    {path:'/',errorElement:<Errorpage/>,element:<Main/>,children:[
        {path:'/',element:<Home/>},
        {path:'/login',element:<Login/>},
        {path:'/category/:id',element:<Products/>,loader:({params})=>fetch(`http://localhost:5000/products?category_id=${params.id}`)},
        {path:'/blog',element:<Blog/>},
        {path:'/signup',element:<Signup/>}
    ]},
    {
        path:'/dashboard',element:<DashboardLayout/>,children:[
            {path:'/dashboard',element:<Dashboard/>}

        ]
    }
])