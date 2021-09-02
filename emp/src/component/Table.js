// import axios from 'axios';
// import React,{ useState,useEffect } from 'react' ;
// import BootstrapTable from 'react-bootstrap-table-next';
// // import BootstrapTable from 'react-bootstrap-table';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from "react-bootstrap-table2-paginator";
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// // import cellEditFactory from "react-bootstrap-table2-editor";
// import { Pencil,Trash } from 'react-bootstrap-icons';

// const DataList = () => {
//     const [empList,setEmpList] = useState([]);
//     const pagination = paginationFactory({
//         page:1,
//         sizePerPage:2,
//         lastPageText:'>>',
//         firstPageText:'<<',
//         nextPageText:">",
//         prePageText:"<",
//         showTotal:true,
//         onPageChange: (page,sizePerPage) =>{
//             console.log('page',page);
//             console.log('sizePerPage',sizePerPage);
//         },
//         onSizePerPageChange: (page,sizePerPage) =>{
//             console.log('page',page);
//             console.log('sizePerPage',sizePerPage);
//         }
//     })
//     function rankFormatter(cell, row, rowIndex, formatExtraData) { 
//         return ( 
//               <div>
//           <span>< Pencil
//              style={{ fontSize: 20 }}
//              color="disabled"  
//             /> < Trash
//             style={{ fontSize: 20 }}
//             color="disabled"  
//            /> </span>
//          </div> 
//     ); } 

//     const columns =[
//         {dataField:'id',text:'Id'},
//         {dataField:'firstName',text:'First Name',sort:true},
//         {dataField:'lastName',text:'Last Name'},
//         {dataField:'role',text:'Role'},
//         {dataField:'designation',text:'Designation'},
//         {dataField:'salary',text:'Salary',sort:true},
//         {dataField:'doj',text:'DOJ',sort:true},
//         {dataField:'address',text:'Address'},
//         { dataField: "actions", 
//         text: "Actions",
//         formatter: rankFormatter
//       }
//     ]
//     useEffect(()=>{
//         axios.get("http://localhost:8080/api/v1/employeeserv/employees").then(response =>
//             response.data
//         )
//         .then(result => setEmpList(result))
//         .catch(error=>console.log(error));
    
//     },[]);
//   return (
//       <div>
//           <BootstrapTable  keyField='id' columns={columns} data={empList} pagination={pagination}/>
//       </div>
//   );

// }  

// export default DataList;