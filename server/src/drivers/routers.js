const express = require("express");
const { jwtAuthMiddleware } = require("../utils/middlewares");
const {
  driverPermissionRead,
  driverPermissionUpdate,
  driverPermissionDelete,
  driverPermissionCreate,
} = require("./permissions");
const {
  driverControllerList,
  driverControllerDetail,
  driverControllerUpdate,
  driverControllerDelete,
  driverControllerCreate,
} = require("./controllers");

const {
  driverValidationCreate,
  driverValidationUpdate,
} = require("./validations");

const driverRouter = express.Router();
const DRIVER_PATH = "/drivers";

driverRouter.get(
  "/",
  [jwtAuthMiddleware, driverPermissionRead],
  driverControllerList
);

driverRouter.post(
  "/",
  [jwtAuthMiddleware, driverValidationCreate, driverPermissionCreate],
  driverControllerCreate
);

driverRouter.get(
  "/:id",
  [jwtAuthMiddleware, driverPermissionRead],
  driverControllerDetail
);

driverRouter.put(
  "/:id",
  [jwtAuthMiddleware, driverValidationUpdate, driverPermissionUpdate],
  driverControllerUpdate
);

driverRouter.delete(
  "/:id",
  [jwtAuthMiddleware, driverPermissionDelete],
  driverControllerDelete
);

module.exports = {
  driverRouter,
  DRIVER_PATH,
};
