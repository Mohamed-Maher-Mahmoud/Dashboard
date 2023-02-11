
import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import List from './Component/List/List';
import Single from './Component/Single/Single';
import New from './Component/New/New'
import { productInputs, userInputs } from './FormSource';
import { useContext } from 'react';
import { DarkModeContext } from './Context/DarkContext';





function App() {

  const {darkMode} = useContext(DarkModeContext)

  

  let routers = createBrowserRouter([
   {path:"" , element:<Layout/>,children:[
    {index:true , element:<Home/>},
    {path:'users' , element:<List/>},
    {path:'user/single' , element:<Single/>},
    {path:'user/new' , element:<New inputs={userInputs} title="Add New User" />},
    {path:'product/new' , element:<New inputs={productInputs} title="Add New Product" />},
    

   ]}

  ])
  return (
    <div className={darkMode?"app dark" : "app"}>
   
  <RouterProvider router={routers}/>
  </div>
 

  
  );
  
}

export default App;
