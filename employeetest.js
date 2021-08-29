// const connection =require("../db/db_connect");

// const findAll = async (req,res) => {
//   try{
//     const result = await connection.query('SELECT * from employee');
//     console.log(result[0]);
//     return result[0];
//     // return new Promise((resolve, reject) => {
//     //   connection.query(
//     //     `SELECT * FROM employee`,
//     //     (err, result) => {
//     //       console.log(result)
//     //       return err ? reject(err) : resolve(result);
//     //     }
//     //   );
//     // });
//   }
//   catch(err){
//    res.json({"status":400,"message":"error getting details "});
//   }
// }
// const findById = async (id) => {
//   try{
//     console.log(id);
//     const result = await connection.query(`SELECT * FROM employee WHERE id = ${id}`);
//     if (!result[0].length) {
//       throw new Error(" failed to connect");
//     }
//     console.log(result[0])
//     return result[0];
//     // return new Promise((resolve, reject) => {
//     //   connection.query(
//     //     `SELECT * FROM employee WHERE id = ${id}`,
//     //     (err, result) => {
//     //       console.log(result);
//     //       if(result.length)
//     //         resolve(result);
//     //       else
//     //         reject("not found");
//     //     }
//     //   );
//     // });
//   }
//   catch(err){
//     // console.log(err);
//     // return (err.message,400) ;
//     throw Error(" failed to connect");
//   //  res.json({"status":400,"message":err.message});
//   }
// }


// // const newEmployee = (employee) => {
// //   this.name = employee.name;
// // };

// const create = async (newEmployee) => {
//   try{
//    let response = await connection.query(
//     `INSERT INTO employee SET name = ?`,
//     [ newEmployee]
//     );
//     console.log("inserted rows :",response[0].affectedRows);
//     return "success"
//     // return new Promise((resolve, reject) => {
//     //   connection.query(
//     //     `INSERT INTO employee (id,name) VALUES ? ${newEmployee}`,
//     //     (err, result) => {
//     //       console.log(result);
//     //       return err ? reject("can't create new Employee") : resolve(result);
//     //     }
//     //   );
//     // });
//   }
//   catch(err){
//    res.json({"status":400,"message":err});
//   }
// }

// const update = async (id,name) => {
//   try{
//     console.log(id);
//     console.log(name);
//     let response = await connection.query(
//     `UPDATE employee SET name = ?  WHERE id = ?`,
//     [name, id]
//     );
//     console.log(response);
//     // console.log("updated rows :",response[0].affectedRows);
//     return "updated"
//     // return new Promise((resolve, reject) => {
//     //   connection.query(
//     //     `INSERT INTO employee (id,name) VALUES ? ${newEmployee}`,
//     //     (err, result) => {
//     //       console.log(result);
//     //       return err ? reject("can't create new Employee") : resolve(result);
//     //     }
//     //   );
//     // });
//   }
//   catch(err){
//    res.json({"status":400,"message":err});
//   }
// }
// module.exports = { findAll:findAll,findById:findById ,create:create,update:update};
