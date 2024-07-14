const express = require("express");
const { jwtAuthMiddleware } = require("../utils/middlewares");
const {
  carPermissionRead,
  carPermissionUpdate,
  carPermissionDelete,
  carPermissionCreate,
} = require("./permissions");
const {
  carControllerList,
  carControllerDetail,
  carControllerUpdate,
  carControllerDelete,
  carControllerCreate,
} = require("./controllers");

const {
  carValidationCreate,
  carValidationUpdate,
} = require("./validations");

const carRouter = express.Router();
const CAR_PATH = "/cars";

carRouter.get(
  "/",
  [jwtAuthMiddleware, carPermissionRead],
  carControllerList
);

carRouter.post(
  "/",
  [jwtAuthMiddleware, carValidationCreate, carPermissionCreate],
  carControllerCreate
);

carRouter.get(
  "/:id",
  [jwtAuthMiddleware, carPermissionRead],
  carControllerDetail
);

carRouter.put(
  "/:id",
  [jwtAuthMiddleware, carValidationUpdate, carPermissionUpdate],
  carControllerUpdate
);

carRouter.delete(
  "/:id",
  [jwtAuthMiddleware, carPermissionDelete],
  carControllerDelete
);

module.exports = {
  carRouter,
  CAR_PATH,
};
