import React from 'react'
import styleDatatable from './Datatable.module.css'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns , userRows } from '../../DataTableSource';
import { Link } from 'react-router-dom';

export default function Datatable() {

  const actionColumn = [
    {field:"action", headerName:"Action",width:200, renderCell:()=>{
      return <div className={styleDatatable.cellAction}>
         <Link to="/user/single" style={{textDecoration:"none"}}>
        <div className={styleDatatable.viewButton} id='viewButton'>View</div>
        </Link>
        <div className={styleDatatable.deleteButton} id='deleteButton'>Delete</div>
      </div>
    }}
  ]

return <>

  <div className={styleDatatable.dataTable} >
    <div className={styleDatatable.titleDatat}>Add New User
    <Link to="/user/new" className={styleDatatable.link} style={{textDecoration:"none"}}>Add New</Link>
    </div>
    
  <DataGrid className={styleDatatable.dataGrid}
        rows={userRows} 
        columns={userColumns.concat(actionColumn) } 
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      ></DataGrid>
    
  </div>
  
  
  </>
}
