import { createBrowserRouter } from "react-router-dom";
import { Home } from "../home";
import { Register } from "../register";

const supermroutes = createBrowserRouter([
    {
        path : "/",
        element : <Home/>
    },
    {
        path : '/supermarket/register',
        element : <Register/>
    }
])

export { supermroutes }