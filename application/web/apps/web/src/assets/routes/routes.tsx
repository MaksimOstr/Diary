import { SignUp } from "@web/SignUp";
import { Link, createBrowserRouter } from "react-router-dom";
import Navigator from "./Navigator";
import { SignIn } from "@web/SignIn";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigator/>
  },
  {
    path: '/SignUp',
    element: <SignUp/>
  },
  {
    path: '/SignIn',
    element: <SignIn/>
  }
])