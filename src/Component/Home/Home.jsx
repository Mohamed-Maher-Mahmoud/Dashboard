
import React from 'react'
import Widgets from '../Widgets/Widgets'
import Featured from '../Featured/Featured'
import Chart from '../Chart/Chart'
import Table from '../Table/Tables.jsx'
import styleHome from './Home.module.css'


export default function Home() {
  return <>

  

    <div className={styleHome.widgets}>
      <Widgets type='user'/> 
      <Widgets type='order'/>
      <Widgets type='earning'/>
      <Widgets type='balance'/>
    </div>
    <div className={styleHome.charts}>
      <Featured/>
      <Chart title='Last 6 Month (Revenue)' aspect={2/1}/>
    </div>
    <div className={styleHome.listContainer}>
      <div className={styleHome.listTitle}>Latest Transactions</div>
      <Table/>
    </div>

  
    

  
  
  
  
  </>
}
































/*import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import stylehome from "./Home.module.css";

export default function Home() {
  const [data, setData] = useState([]);

  async function getproducts() {
    let data = await axios.get(
      "https://yallafoodapi.witheldokan.com/api/customer/home/sections"
    );
    setData(data.data.data);
    console.log(data);
  }

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <>
      <div className={stylehome.col}>
        {data.map((product, index) => {
          return (<>
           <img
                    src={product.image}
                    className="card-img-top "
                    height="250px"
                    alt={product.title}
                  />
          <h4 key={index}>{product.name}</h4>

          </>) 
          
        })}
      </div>
    </>
  );
}
*/ 