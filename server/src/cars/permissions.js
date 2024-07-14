const { hasPermissionsMiddleware } = require("../utils/middlewares");

const carPermissionCreate = hasPermissionsMiddleware(["create-cars"]);
const carPermissionRead = hasPermissionsMiddleware(["read-cars"]);
const carPermissionUpdate = hasPermissionsMiddleware(["update-cars"]);
const carPermissionDelete = hasPermissionsMiddleware(["delete-cars"]);

module.exports = {
  carPermissionCreate,
  carPermissionRead,
  carPermissionUpdate,
  carPermissionDelete,
};
