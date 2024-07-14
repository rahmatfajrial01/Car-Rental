const express = require("express");
const { jwtAuthMiddleware } = require("../utils/middlewares");
const {
  transactionPermissionRead,
  transactionPermissionUpdate,
  transactionPermissionDelete,
  transactionPermissionCreate,
} = require("./permissions");
const {
  transactionControllerList,
  transactionControllerDetail,
  transactionControllerUpdate,
  transactionControllerDelete,
  transactionControllerCreate,
} = require("./controllers");

const {
  transactionValidationCreate,
  transactionValidationUpdate,
} = require("./validations");

const transactionRouter = express.Router();
const TRANSACTION_PATH = "/transactions";

transactionRouter.get(
  "/",
  [jwtAuthMiddleware, transactionPermissionRead],
  transactionControllerList
);

transactionRouter.post(
  "/",
  [jwtAuthMiddleware, transactionValidationCreate, transactionPermissionCreate],
  transactionControllerCreate
);

transactionRouter.get(
  "/:id",
  [jwtAuthMiddleware, transactionPermissionRead],
  transactionControllerDetail
);

transactionRouter.put(
  "/:id",
  [jwtAuthMiddleware, transactionPermissionUpdate],
  transactionControllerUpdate
);

transactionRouter.delete(
  "/:id",
  [jwtAuthMiddleware, transactionPermissionDelete],
  transactionControllerDelete
);

module.exports = {
  transactionRouter,
  TRANSACTION_PATH,
};
