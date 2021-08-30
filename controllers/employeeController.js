const  empModel =require("../db/employee");

// Get all Employees
const getEmployee = async (req,res) => {
  try{
    const response = await empModel.findAll();
    res.json(response)
  }
  catch(err){
   res.json({"status":400,"message":err});
  }
}

// create Employee
const createEmployee = async (req,res) => {
  try{
    const response = await empModel.create(req.body.name);
    res.json(response)
  }
  catch(err){
   res.json({"status":400,"message":err});
  }
}

// Get Employee by id
const getEmployeeById = async (req,res) => {
  try{
     const response = await empModel.findById(req.params.id);
     res.json(response)
  }
  catch(err){
   res.json({"status":400,"message":err.message});
  }
}

// update Employee by id
const updateEmployeeById = async (req,res) => {
  try{
     const response = await empModel.update(req.params.id,req.body.name);
     res.json(response)
  }
  catch(err){
   res.json({"status":400,"message":err.message});
  }
}

// delete Employee by id
const deleteEmployeeById = async (req,res) => {
  try{
     const response = await empModel.deleteById(req.params.id);
     res.json(response)
  }
  catch(err){
   res.json({"status":400,"message":err.message});
  }
}
module.exports = {
  getEmployee,getEmployeeById,
  createEmployee,updateEmployeeById,deleteEmployeeById
};