import imgme from '../src/me.jfif'
import styleDataTaple from '../src/Component/Datatable/Datatable.module.css'





export const userColumns = [{field:'id',headerName:"ID" , width:70},
{ field: 'user', headerName: 'User', width: 230 , renderCell:(params)=>{
    return <div className={styleDataTaple.cellwithImg}>
        <img src={imgme} className={styleDataTaple.cellImg} alt=""></img>
        {params.row.username}
    </div>
}, },
{field:'email',headerName:"Email" , width:230},
{field:'age',headerName:"Age" , width:100},
{field:'status',headerName:"Status" , width:160,cellRender:(params)=>{
    return <div className={styleDataTaple.cellStatus}>{params.row.status}</div>

}}


]






export const userRows = [
    {
        id:1,
        username:'Snow',
        status:'active',
        email:'1snow@gmail.com',
        age:35,

    },
    {
        id:2,
        username:'jamie',
        status:'passive',
        email:'2snow@gmail.com',
        age:42,

    },
    {
        id:3,
        username:'Mohamed',
        status:'active',
        email:'3snow@gmail.com',
        age:32,

    },
    {
        id:4,
        username:'ahmed',
        status:'passive',
        email:'2snow@gmail.com',
        age:42,

    },
    {
        id:5,
        username:'khaled',
        status:'active',
        email:'2snow@gmail.com',
        age:40,

    },
    {
        id:6,
        username:'mohsen',
        status:'passive',
        email:'2snow@gmail.com',
        age:16,

    },
    {
        id:7,
        username:'ismail',
        status:'active',
        email:'2snow@gmail.com',
        age:18,

    },
    {
        id:8,
        username:'shika',
        status:'passive',
        email:'2snow@gmail.com',
        age:36,

    },
    {
        id:9,
        username:'zizo',
        status:'active',
        email:'2snow@gmail.com',
        age:25,

    },
    {
        id:10,
        username:'zamalek',
        status:'active',
        email:'2snow@gmail.com',
        age:1911,

    },
 

]