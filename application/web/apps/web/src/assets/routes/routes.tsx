import { Link, createBrowserRouter } from "react-router-dom";
import SignUp from "../../app/pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Link to='SignUp'>to SingUp</Link>
  },
  {
    path: '/SignUp',
    element: <SignUp/>
  }
])