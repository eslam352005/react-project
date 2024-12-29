import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import Default from './Default'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

export default function App() {
 

let roots=createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {index:true,element:<Default/>},
    {path:'/about',element:<About/>},
    {path:'/portfolio',element:<Portfolio/>},
    {path:'/contact',element:<Contact/>},
  ]}
])



  return (
    <>
  <RouterProvider router={roots}/>
    </>
  )
}

 
