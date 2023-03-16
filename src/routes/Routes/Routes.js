import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home";
import ProductDetail from "../../pages/ProductDetail/ProductDetail";

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
                path:'/product/:id',
                element:<ProductDetail></ProductDetail>
            }
        ]
    }
])