import React from 'react'
import styleSingle from './Single.module.css'
import imgSingle from '../Navbar/img/me.jfif'
import Chart from '../Chart/Chart'
import List from '../Table/Tables'
export default function Single() {
  return <>

  <div className={styleSingle.top}>
    <div className={styleSingle.left}>
        <div className={styleSingle.edit}>Edit</div>
        <h1 className={styleSingle.title}>Informatio</h1>
        <div className={styleSingle.item}>
            <img className={styleSingle.itemimg} src={imgSingle} alt=''></img>
            <div className={styleSingle.details}>

                <h1 className={styleSingle.itemTitle}>Mohamed Maher</h1>
                <div className={styleSingle.detailitem}>
                    <span className={styleSingle.itemkey}>Email:</span>
                    <span className={styleSingle.itemvalue}>mohamedmaher21021@gmail.com</span>
                </div>

                <div className={styleSingle.detailitem}>
                    <span className={styleSingle.itemkey}>Phone:</span>
                    <span className={styleSingle.itemvalue}>01117079200</span>
                </div>

                <div className={styleSingle.detailitem}>
                    <span className={styleSingle.itemkey}>Address:</span>
                    <span className={styleSingle.itemvalue}>Cairo,helwan</span>
                </div>

                <div className={styleSingle.detailitem}>
                    <span className={styleSingle.itemkey}>Country:</span>
                    <span className={styleSingle.itemvalue}>Egypt</span>
                </div>

            </div>
        </div>
    </div>


    <div className={styleSingle.right}>
        <Chart aspect={3/1} title="User Spending ( Last 6 Months )"/>
    </div>
  </div>
  <div className={styleSingle.bottom}>
  <h1 className={styleSingle.title}>Last Transactions</h1>
    <List/>
  </div>
  
  
  </>
}
