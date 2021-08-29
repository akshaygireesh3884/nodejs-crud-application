// const  empModel =require("../db/employee");
// // const connection =require("../db/db_connect");
// const getEmployee = async (req,res) => {
//   try{
//     const response = await empModel.findAll();
//     console.log(response);
//     res.json({"status":200,"data":response})
//   }
//   catch(err){
//    res.json({"status":400,"message":err});
//   }
// }
// const createEmployee = async (req,res) => {
//   try{
//     console.log(req.body.name);
//     const response = await empModel.create(req.body.name);
//     console.log(response);
//     res.json({"status":200,"data":response})
//   }
//   catch(err){
//    res.json({"status":400,"message":err});
//   }
// }
// const getEmployeeById = async (req,res) => {
//   try{
//      console.log(req.params.id);
//      let id =(req.params.id);

//      const response = await empModel.findById(id);
//           // connection.query("SELECT * FROM employee", function (err, result, fields) {
//       //   if (err) throw err;
//         console.log(response);
//         res.json({"status":200,"data":response})
//       // }); 
//   }
//   catch(err){
//    res.json({"status":400,"message":err.message});
//   }
// }
// const UpdateEmployeeById = async (req,res) => {
//   try{
     
//      let id = req.params.id ;
//      let name = req.body.name ;
//      console.log(req.params.id);
//      console.log(req.body.name);
//      const response = await empModel.update(id,name);
//           // connection.query("SELECT * FROM employee", function (err, result, fields) {
//       //   if (err) throw err;
//         console.log(response);
//         res.json({"status":200,"data":response})
//       // }); 
//   }
//   catch(err){
//    res.json({"status":400,"message":err.message});
//   }
// }
// module.exports = {
//   getEmployee: getEmployee,getEmployeeById:getEmployeeById,createEmployee:createEmployee,UpdateEmployeeById:UpdateEmployeeById
// };