import { createBrowserRouter } from "react-router-dom";
import About from "../component/About";
import Home from "../component/Home";
import Login from "../component/Login";
import Product from "../component/Product";
import Register from "../component/Register";
import Main from "../Layout/Main";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/product", element: <Product></Product> },
      { path: "/about", element: <About></About> },
      { path: "login", element: <Login></Login> },
      { path: "/registration", element: <Register></Register> },
    ],
  },
]);
export default routes;
