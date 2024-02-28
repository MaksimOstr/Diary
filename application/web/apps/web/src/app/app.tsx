import React from 'react'
import './app.module.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from '../assets/routes/routes'

const app:React.FC = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default app
