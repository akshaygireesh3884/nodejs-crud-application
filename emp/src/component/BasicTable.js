import React,{ useState,useEffect,useMemo} from "react";
import {useTable,useSortBy,useGlobalFilter,usePagination} from 'react-table';
import axios from "axios";
import './Table.css';
import { Pencil,Trash } from 'react-bootstrap-icons';
import {format} from 'date-fns';
import { GlobalFilter } from "./GlobalFIlter";


export const BasicTable = () => {
    const Columns =[
        {
           Header:'ID', 
           accessor:'id',
           
        },
        {
            Header:'FIRST NAME',
            accessor:'firstName',
    
         },
         {
            Header:'LAST NAME', 
            accessor:'lastName',
    
         },
         {
            Header:'ROLE', 
            accessor:'role',
         },
         {
            Header:'DESIGNATION', 
            accessor:'designation',
    
         },
         {
            Header:'SALARY', 
            accessor:'salary',
    
         },
         {
            Header:'DOJ', 
            accessor:'doj',
            Cell:({value})=>{
                return format(new Date(value),'dd/MM/yyyy')
            }
         },
         {
            Header:'ADDRESS', 
            accessor:'address',
    
         },
         {
            width: 200,
            Header: "Actions",
            Cell: ({ cell }) => (
                <span>< Pencil 
                style={{ fontSize: 20 }}
                color="disabled"  
               /> < Trash onClick ={ ()=>{handleClick(cell.row.original.id)}}
               style={{ fontSize: 20 }}
               color="disabled"  
              /> </span>
            )
          }
    ]
    const [empList,setEmpList] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/api/v1/employeeserv/employees").then(response =>
            response.data
        )
        .then(result => setEmpList(result))
        .catch(error=>console.log(error));
    
    },[]);
    
    const columns = useMemo(()=>Columns,[]);
    const data = useMemo(()=>empList);
    // const data = empList ;
    console.log(data);
   const tableInstance = useTable({
        columns,
        data
    },/*useGlobalFilter*/useSortBy,usePagination);
    const {getTableProps,getTableBodyProps,headerGroups,page,nextPage,previousPage,prepareRow,/*state,setGlobalFilter*/} = tableInstance ;
    // const {globalFilter} =state
    const handleClick = (id) => {
        alert("clicked");
        axios.delete(`http://localhost:8080/api/v1/employeeserv/employees/${id}`).then(response =>{
           console.log(response.data)
           }
        )
        .catch(error=>console.log(error));
      }
    return (
        <div >
            {/* <GlobalFilter filter={globalFilter} setFilter ={setGlobalFilter}/> */}
            {/* <div>
            <p style={{float: "right",marginRight:"60px"}}><Test/></p>
            </div> */}
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup)=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) =>(
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}</th>
                                ))
                            }
                           
                        </tr>
                        ))
                    }
                
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row =>{
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            )
                                        })
                                    }
                                   
                                </tr>
                            )
                        })
                    }
                  
                </tbody> 
            </table>
            <div id="btn_align">
                <button onClick={()=>previousPage()}>Previous</button>
                <button onClick={()=>nextPage()}>Next</button>
            </div>
        </div>
    )
}
