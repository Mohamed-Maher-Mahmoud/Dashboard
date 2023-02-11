import React from 'react'
import styleNav from './Navbar.module.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import avatar from './img/me.jfif'


export default function Navbar() {
  return <>

  <div className={styleNav.navbar } id='navbar'>
    <div className={styleNav.wrapper}>
      <div className={styleNav.search} id='search'>
        <input className={styleNav.sea} type='text' placeholder='Search'/> 
        <SearchOutlinedIcon/>

      </div>
      <div className={styleNav.items}>
      <div className={styleNav.item}>
        <LanguageOutlinedIcon/>
       English

        </div>
      <div className={styleNav.item}>
        <DarkModeOutlinedIcon className={styleNav.icon}/>
       
        </div>
      <div className={styleNav.item}>
        <FullscreenExitOutlinedIcon className={styleNav.icon}/>
  
        </div>
      <div className={styleNav.item}>
        <NotificationsNoneOutlinedIcon className={styleNav.icon}/>
        <div className={styleNav.counter}>1</div>
       
        </div>
      <div className={styleNav.item}>
        <ChatBubbleOutlineOutlinedIcon className={styleNav.icon}/>
        <div className={styleNav.counter}>2</div>
       
        </div>
      <div className={styleNav.item}>
        <TocOutlinedIcon className={styleNav.icon}/>
       
        </div>
      <div className={styleNav.item}>
       <img src={avatar} alt='avatar' className={styleNav.avatar}/>
       
        </div>

      </div>

    </div>
  </div>

  </>
}

