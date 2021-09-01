import React,{useState} from "react";
import axios from "axios";

const GetEmployeeRecords = () =>
{
    const [empList,setEmpList] = useState([]);
    
        axios.get("http://localhost:8080/api/v1/employeeserv/employees").then(response =>
            response.data
        )
        .then(result => setEmpList(result))
        .catch(error=>console.log(error));
    return empList;
}
export default GetEmployeeRecords;