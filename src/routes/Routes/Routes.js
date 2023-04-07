import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../dashboard/addProduct/AddProduct";
import AllProducts from "../../dashboard/allProducts/AllProducts";
import MyOrders from "../../dashboard/customerDataPage/MyOrders";
import WishLists from "../../dashboard/wishListedProduct/WishLists";
import DashbordLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/logIn/LogIn";
import ProductDetail from "../../pages/ProductDetail/ProductDetail";
import SignUp from "../../pages/signUp/SignUp";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/products/:id',
                element:<ProductDetail></ProductDetail>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<DashbordLayout></DashbordLayout>,
        children:[
            {
                path:'/dashboard',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/allProducts',
                element:<AllProducts></AllProducts>
            },
            {
                path:'/dashboard/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/dashboard/wishList',
                element:<WishLists></WishLists>
            }
        ]
    }
])