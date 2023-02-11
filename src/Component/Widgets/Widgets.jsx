import React from 'react';
import styleWidge from './Widget.module.css';
import KeyboardControlKeyOutlinedIcon from '@mui/icons-material/KeyboardControlKeyOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';



export default function Widgets({type}) {


    let data;
    const amount = 100;
    const diff = 20;


    switch(type) {
        case 'user':
            data={
                title:'USERS',
                isMoney:false,
                link:'See All Users',
                icon:<PersonOutlineOutlinedIcon className={styleWidge.icon} 
                style={{
                    color:"crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
                />
            };
            break;
        case 'order':
            data={
                title:'ORDERS',
                isMoney:false,
                link:'View All Orders',
                icon:<AddShoppingCartOutlinedIcon className={styleWidge.icon}
                style={{
                    color:"goldenrod",
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                }}
                />
            };
            break;
        case 'earning':
            data={
                title:'EARNINGS',
                isMoney:true,
                link:'View net earnings',
                icon:<MonetizationOnOutlinedIcon className={styleWidge.icon}
                style={{
                    color:"green",
                    backgroundColor: "rgba(0, 128, 0, 0.2)",
                }}
                />
            };
            break;
        case 'balance':
            data={
                title:'BALANCE',
                isMoney:true,
                link:'See Details',
                icon:<AccountBalanceWalletOutlinedIcon className={styleWidge.icon}
                style={{
                    color:"purple",
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                }}
                />
            };
            break;
            default:
                break;
    }

    
    

  

  return (
    <div className={styleWidge.widgest}>

        <div className={styleWidge.left}>
            <span className={styleWidge.title}>{data.title}</span>
            <span className={styleWidge.counter}>{data.isMoney && "$"} {amount}</span>
            <span className={styleWidge.link}>{data.link}</span>
        </div>
        <div className={styleWidge.right}>
            <div className={styleWidge.percentage}>
                <KeyboardControlKeyOutlinedIcon/>{diff} %
            </div>
            {data.icon} 

        </div>
        
    </div>
  )
}
