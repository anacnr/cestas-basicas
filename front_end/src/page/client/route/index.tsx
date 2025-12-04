import { createBrowserRouter } from "react-router-dom";
import { Register } from "../page/supermarket/register";
import { Home } from "../page/supermarket/home";

const exportroutes = createBrowserRouter([
    {
        path : "/",
        element : <Home/>
    },
    {
        path : '/register',
        element : <Register/>
    }
])

export { exportroutes }