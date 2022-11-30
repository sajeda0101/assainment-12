import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../components/AddProduct/AddProduct";
import Blog from "../../components/Blog/Blog";
import Dashboard from "../../components/Dashboard/Dashboard";
import MyOrder from "../../components/Dashboard/MyOrder/MyOrder";
import MyProduct from "../../components/Dashboard/MyProduct/MyProduct";
import Errorpage from "../../components/Errorpage/Errorpage";
import Login from "../../components/Login/Login";
import Home from "../../components/Pages/Home/Home";
import Products from "../../components/Pages/Home/SecondProducts/Products/Products";
import Signup from "../../components/Signup/Signup";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Errorpage />,
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      {
        path: "/category/:id",
        element:<PrivateRoute><Products /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://style-world.vercel.app/products?category_id=${params.id}`
          ),
      },
      { path: "/blog", element: <Blog /> },
      { path: "/signup", element: <Signup /> },
      {path:'/addProduct',element:<AddProduct></AddProduct>},
      {path:'/myProduct',element:<MyProduct/>}
      
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <MyOrder/>}
  ],
  },
]);
