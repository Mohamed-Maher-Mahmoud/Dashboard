import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import styleHome from '../Home/Home.module.css'
export default function Layout() {
  return <>
  
  
  <div className={styleHome.home}>

  <Sidebar/>
  <div className={styleHome.homecontainer}>
    <Navbar/>
  <Outlet>

  </Outlet>
  </div>
  </div>

  </>
}
