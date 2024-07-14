const { hasPermissionsMiddleware } = require("../utils/middlewares");

const driverPermissionCreate = hasPermissionsMiddleware(["create-drivers"]);
const driverPermissionRead = hasPermissionsMiddleware(["read-drivers"]);
const driverPermissionUpdate = hasPermissionsMiddleware(["update-drivers"]);
const driverPermissionDelete = hasPermissionsMiddleware(["delete-drivers"]);

module.exports = {
  driverPermissionCreate,
  driverPermissionRead,
  driverPermissionUpdate,
  driverPermissionDelete,
};
