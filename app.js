var express = require("express");
// var path = require("path");
// var cookieParser = require("cookie-parser");
var logger = require("morgan");

/* API Routes */
const apiRouter = require("./routes/apiRouter");
// const db =require("./db/db_connect");
const dbConnection = require("./db/db_connect");
var app = express();



app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/api", apiRouter);


module.exports = app;
