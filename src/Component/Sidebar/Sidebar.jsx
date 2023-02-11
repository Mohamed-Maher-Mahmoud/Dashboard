import React from 'react'
import styleSidebar from './Sidebar.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../Context/DarkContext';
import { useContext } from 'react';

export default function Sidebar() {
  const {dispatch} = useContext(DarkModeContext)
  return <>

  <div className={styleSidebar.sidebar} id="sidebar">
    <div className={styleSidebar.top}>
    <Link to="" style={{textDecoration:"none"}}><span className={styleSidebar.logo} id='logo'>Admin</span></Link>
        
    </div>
    <hr id='hr'/>
    <div className={styleSidebar.center}>
        <ul>
            <p className={styleSidebar.title}>MAIN</p>
            <li id='li'><DashboardIcon className={styleSidebar.icon} id='icon'/><span>Dashboard</span></li>
            <p className={styleSidebar.title}>LISTS</p>
            <Link to="users" style={{textDecoration:"none"}}>
            <li id='li'><PersonOutlineOutlinedIcon className={styleSidebar.icon} id='icon'/><span>Users</span></li>
            </Link>

            <Link to="/product/new" style={{textDecoration:"none"}}>
            <li id='li'><Inventory2OutlinedIcon className={styleSidebar.icon} id='icon'/><span>Product</span></li>
            </Link>
            <li id='li'><ViewListOutlinedIcon className={styleSidebar.icon} id='icon'/><span>Orders</span></li>
            <li id='li'><DeliveryDiningOutlinedIcon className={styleSidebar.icon} id='icon'/><span>Delivery</span></li>
            <p className={styleSidebar.title}>USEFUL</p>
            <li id='li'><InsertChartOutlinedOutlinedIcon className={styleSidebar.icon} id='icon'/><span>Stats</span></li>
            <li id='li'><NotificationsNoneOutlinedIcon className={styleSidebar.icon} id='icon'/><span>Notifications</span></li>
            <p className={styleSidebar.title}>SERVICES</p>
            <li id='li'><SettingsSystemDaydreamOutlinedIcon className={styleSidebar.icon} id='icon'/><span>System Health</span></li>
            <li id='li'><PsychologyOutlinedIcon className={styleSidebar.icon} id='icon'/><span>Logs</span></li>
            <li id='li'><SettingsSuggestOutlinedIcon className={styleSidebar.icon} id='icon'/><span>Settings</span></li>
            <p className={styleSidebar.title}>USERS</p>
            <li id='li'><AccountCircleOutlinedIcon className={styleSidebar.icon} id='icon'/><span>Profile</span></li>
            <li id='li'><LogoutOutlinedIcon className={styleSidebar.icon} id='icon'/><span>Logout</span></li>
        </ul>
    </div>
    <div className={styleSidebar.bottom}>
        <div className={styleSidebar.colorOption} onClick={()=>dispatch({type:'LIGHT'})}></div>
        <div className={styleSidebar.colorOption} onClick={()=>dispatch({type:'DARK'})}></div>
      
    </div>

  </div>
  
  </>
}
