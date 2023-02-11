import React from 'react'
import styleFeatured from './Featured.module.css'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'


export default function Featured() {
  return (
    <div className={styleFeatured.featured}>
      <div className={styleFeatured.top}>
        <h1 className={styleFeatured.title}>Total Revenu</h1>
        <MoreVertOutlinedIcon fontSize='small'/>
        </div>
      <div className={styleFeatured.bottom}>
        <div className={styleFeatured.featuredChart}>
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
        </div>
        <p className={styleFeatured.title}>Total sales made today</p>
        <p className={styleFeatured.amount}>$420</p>
        <p className={styleFeatured.desc}>Previous transactions processing. Last payments may not be included</p>
        <div className={styleFeatured.summary}>
          <div className={styleFeatured.item}>
            <div className={styleFeatured.itemTitle}>Target</div>
            <div className={styleFeatured.itemResultNeg}>
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className={styleFeatured.resultAmount}>$12.4k</div>
            </div>
          </div>
          <div className={styleFeatured.item}>
            <div className={styleFeatured.itemTitle}>Last Week</div>
            <div className={styleFeatured.itemResultPos}>
              <KeyboardArrowUpOutlinedIcon fontSize='small'/>
              <div className={styleFeatured.resultAmount}>$12.4k</div>
            </div>
          </div>
          <div className={styleFeatured.item}>
            <div className={styleFeatured.itemTitle}>Last Month</div>
            <div className={styleFeatured.itemResultPos}>
              <KeyboardArrowUpOutlinedIcon fontSize='small'/>
              <div className={styleFeatured.resultAmount}>$12.4k</div>
            </div>
          </div>
        </div>
        
      </div>
      </div>
  )
}
