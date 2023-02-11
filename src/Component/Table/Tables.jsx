import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styleTable from './Table.module.css'
import meimg from './img/2d69c478-5f2d-4b06-8861-0807dc0b0789.jfif'

export default function Tables() {
    const rows = [
        {
            id:1143155,
            product:"Acer Nitro 5",
            customer: "John Smith",
            date:"1 March",
            amount:785,
            method:"cash on Delivery",
            status:'Approved'
        },
        {
            id:2235235,
            product:"Playstation 5",
            customer: "Michael Doe",
            date:"1 March",
            amount:900,
            method:"Online Payment",
            status:'Pending'
        },
        {
            id:2342353,
            product:"Redragon S101 ",
            customer: "John Smith",
            date:"1 March",
            amount:35,
            method:"cash on Delivery",
            status:'Pending'
        },
        {
            id:2357741,
            product:"Razer Blade 15",
            customer: "Jane Smith",
            date:"1 March",
            amount:920,
            method:"Online",
            status:'Approved'
        },
        {
            id:2342355,
            product:"ASUS ROG Strix",
            customer: "Harold Carol",
            date:"1 March",
            amount:920,
            method:"Online",
            status:'Pending'
        },

    ]
  return <>
  <TableContainer component={Paper} className={styleTable.table} id='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={styleTable.tableCell} id='tableCell'>Traking Id</TableCell>
            <TableCell className={styleTable.tableCell} id='tableCell'>Product</TableCell>
            <TableCell className={styleTable.tableCell} id='tableCell'>Customer</TableCell>
            <TableCell className={styleTable.tableCell} id='tableCell'>Date</TableCell>
            <TableCell className={styleTable.tableCell} id='tableCell'>Amount</TableCell>
            <TableCell className={styleTable.tableCell} id='tableCell'>Payment Method</TableCell>
            <TableCell className={styleTable.tableCell} id='tableCell'>Status</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell id='tableCell' > {row.id}</TableCell>
              <TableCell className={styleTable.tableCell} id='tableCell'>
                <div className={styleTable.cellWrapper}>
                    <img src={meimg} alt='' className={styleTable.image}/>
                    {row.product}
                </div>
                </TableCell>
              <TableCell className={styleTable.tableCell} id='tableCell'>{row.customer}</TableCell>
              <TableCell className={styleTable.tableCell} id='tableCell'>{row.date}</TableCell>
              <TableCell className={styleTable.tableCell} id='tableCell'>{row.amount}</TableCell>
              <TableCell className={styleTable.tableCell} id='tableCell'>{row.method}</TableCell>
              <TableCell className={styleTable.tableCell} id='tableCell'>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
}
