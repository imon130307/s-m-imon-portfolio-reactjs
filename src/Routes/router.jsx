import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home"
import Banner from './../Components/Banner/Banner';







const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            // {
            //     path:"/",
            //     element:<Banner/>
            // },
        ]
    },
])

export default router
