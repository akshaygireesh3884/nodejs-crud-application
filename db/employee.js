const connection =require("../db/db_connect");

const findAll = async (req,res) => {
  try{
    const result = await connection.query('SELECT * from employee');
    console.log(result[0]);
    return result[0];
  }
  catch(err){
   res.json({"status":400,"message":"error getting details "});
  }
}
const findById = async (id) => {
  try{
    console.log(id);
    const result = await connection.query(`SELECT * FROM employee WHERE id = ${id}`);
    if (!result[0].length) {
      throw new Error(" failed to connect");
    }
    console.log(result[0])
    return result[0];
  }
  catch(err){
    throw Error(" failed to connect");
  }
}


// const newEmployee = (employee) => {
//   this.name = employee.name;
// };

const create = async (newEmployee) => {
  try{
   let response = await connection.query(
    `INSERT INTO employee SET name = ?`,
    [ newEmployee]
    );
    console.log("inserted rows :",response[0].affectedRows);
    return "success" ;
  }
  catch(err){
   res.json({"status":400,"message":err});
  }
}

const update = async (id,name) => {
  try{
    console.log(id);
    console.log(name);
    let response = await connection.query(
    `UPDATE employee SET name = ?  WHERE id = ?`,
    [name, id]
    );
    console.log(response);
    if(response[0].affectedRows) return "updated";
    return `No employee found with id:${id}`;
  }
  catch(err){
   res.json({"status":400,"message":err});
  }
}

const deleteById = async (id) => {
  try{
    let response = await connection.query(
    `DELETE FROM employee WHERE id = ?`,
    [id]
    );
    console.log(response);
    if(response[0].affectedRows) return "deleted";
    return `No employee found with id:${id}`;
  }
  catch(err){
   res.json({"status":400,"message":err});
  }
}
module.exports = { findAll,findById ,create,update,deleteById};
