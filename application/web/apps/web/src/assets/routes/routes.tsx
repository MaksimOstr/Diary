import { createBrowserRouter } from "react-router-dom";
import Navigator from "./Navigator";
import { SignUp } from "@web/SignUp";
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