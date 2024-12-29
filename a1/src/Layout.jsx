import React from 'react'

import Default from './Default'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return<>
  
  <nav className="navbar navbar-expand-sm fixed-top  ">
  <div className="container">
    <h2 className='text-white'>START FRAMEWORK</h2>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link" to={'/about'} >ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/portfolio'}>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"to={'/contact'}>CONTACT</NavLink>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
  <Outlet/>
  <footer>
  <div className="foot p-5 ">
    <div className="container mt-5">

<div className="row text-center text-white">

    <div className="col-md-4">
        <h3>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p className='mt-2'>Clark, MO 65243</p>
    </div>
    <div className="col-md-4">
        <h3>AROUND THE WEB</h3>
        <i class="fa-brands fa-facebook p-3 mt-2 fs-6"></i>
        <i class="fa-brands fa-twitter p-3 mt-2 fs-6"></i>
        <i class="fa-brands fa-linkedin p-3 mt-2 fs-6"></i>
        <i class="fa-solid fa-globe p-3 mt-2 fs-6"></i>
    </div>
    <div className="col-md-4">
        <h3>ABOUT FREELANCER</h3>
       <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>
</div>
    

    </div>
   
  </div>

  </footer>

  <div className="bottom p-3 text-white text-center">
<p>Copyright © Your Website 2021</p>
</div>
  </>
}
