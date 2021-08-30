import axios from 'axios';
import React,{ useState,useEffect } from 'react' ;
import BootstrapTable from 'react-bootstrap-table-next';
// import BootstrapTable from 'react-bootstrap-table';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from "react-bootstrap-table2-paginator";
// import cellEditFactory from "react-bootstrap-table2-editor";
import { Pencil,Trash } from 'react-bootstrap-icons';

const DataList = () => {
    const [empList,setEmpList] =useState([]);
    // const buttonAction = (cell,row,rowIndex,formatExtraData)=>{
    //   return '<BootstrapButton>Button</BootstrapButton>';
    // }
    function rankFormatter(cell, row, rowIndex, formatExtraData) { 
        return ( 
              <div>
          <span>< Pencil
             style={{ fontSize: 20 }}
             color="disabled"  
            /> < Trash
            style={{ fontSize: 20 }}
            color="disabled"  
           /> </span>
         </div> 
    ); } 

    const columns =[
        {dataField:'id',text:'Id'},
        {dataField:'firstName',text:'First Name'},
        {dataField:'lastName',text:'Last Name'},
        {dataField:'role',text:'Role'},
        {dataField:'designation',text:'Designation'},
        {dataField:'salary',text:'Salary'},
        {dataField:'doj',text:'DOJ'},
        {dataField:'address',text:'Address'},
        { dataField: "actions", 
        text: "Actions",
        formatter: rankFormatter
      }
    ]
    useEffect(()=>{
        axios.get("/api/v2/getemployee").then(response =>response.data)
        .then(result => setEmpList(result))
        .catch(error=>console.log(error));
    
    },[]);
  return (
      <div>
          <BootstrapTable keyField='id' columns={columns} data={empList}/>
          {/* <table>
              <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Role</th>
                  <th>Designation</th>
                  <th>Salary</th>
                  <th>Date of Joining</th>
                  <th>Address</th>
                  <th>Actions</th>
              </tr>
              {
                  empList && empList.length > 0 ?
                  empList.map(emp =>
                    <tr>
                        <td>{emp.id}</td>
                        <td>{emp.firstName}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.role}</td>
                        <td>{emp.designation}</td>
                        <td>{emp.salary}</td>
                        <td>{emp.doj}</td>
                        <td>{emp.address}</td>
                        <td><span><button >Edit</button></span><span><button >Delete</button></span></td>
                    </tr>) :'Loading'
              }
          </table> */}
      </div>
  );

}  

export default DataList;