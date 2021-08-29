
var mysql = require('mysql2/promise');
const { loggers } = require('winston');

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database :"employee"
  });
  
  // connection.getConnection((err) =>{
  //   if (err) throw err;
  //   console.log("Connected");
  // });
 
  
  module.exports = connection;