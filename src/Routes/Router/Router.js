import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../components/AddProduct/AddProduct";
import Blog from "../../components/Blog/Blog";
import MyOrder from "../../components/Dashboard/MyOrder/MyOrder";
import MyProduct from "../../components/Dashboard/MyProduct/MyProduct";
import Errorpage from "../../components/Errorpage/Errorpage";
import Login from "../../components/Login/Login";
import Home from "../../components/Pages/Home/Home";
import Products from "../../components/Pages/Home/SecondProducts/Products/Products";
import Signup from "../../components/Signup/Signup";
import AllBuyer from "../../Layout/DashboardLayout/AllBuyer/AllBuyer";
import AllSeller from "../../Layout/DashboardLayout/AllSellers/AllSeller";
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
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://style-world-sajeda0101.vercel.app/products?category_id=${params.id}`),
      },
      { path: "/blog", element: <Blog /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/myorder",
        element: <MyOrder />,
      },
      { path: "/dashboard/addProduct", element: <AddProduct /> },
      { path: "/dashboard/allSeller", element: <AllSeller /> },
      { path: "/dashboard/allBuyer", element: <AllBuyer /> },
      {
        path: "/dashboard/myProduct",
        element: <MyProduct />,
      },
      // {path:'/dashboard/reported',element:<MyProduct/>},
    ],
  },
]);
