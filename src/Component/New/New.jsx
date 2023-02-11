import React from 'react'
import styleNow from './New.module.css'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';

export default function New({inputs,title}) {

    const [file, setFile] = useState("");
   //console.log(file)


  return <>
  
  <div className={styleNow.top}>
    <h1>{title}</h1>
  </div>
  <div className={styleNow.bottom}>
    <div className={styleNow.left}>
        <img src={file?URL.createObjectURL(file):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} className={styleNow.imgnow}  alt='' ></img>

    </div>
    <div className={styleNow.right}>
        <form>
            <div className={styleNow.forminput}>
                <label htmlFor='file'>Image:<DriveFolderUploadIcon className={styleNow.icon}/></label>
                <input  type='file' id='file' onChange={e=>setFile(e.target.files[0])} style={{display:'none'}} />
            </div>
             {inputs.map((input) => (

                <div className={styleNow.forminput} key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}/>
            </div>

            ))}
            
           
            <button>Send</button>
        </form>
    </div>
  </div>
  </>
}
