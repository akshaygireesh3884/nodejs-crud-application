var express = require("express");
var apiRouter = express.Router();

const employeeController = require("../controllers/employeeController");

apiRouter.get("/v2/getemployee", employeeController.getEmployee);
apiRouter.get("/v2/getemployee/:id", employeeController.getEmployeeById);
apiRouter.post("/v2/getemployee", employeeController.createEmployee);
apiRouter.put("/v2/getemployee/:id", employeeController.updateEmployeeById);
apiRouter.delete("/v2/getemployee/:id", employeeController.deleteEmployeeById);






module.exports = apiRouter;
