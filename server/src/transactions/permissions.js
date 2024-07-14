const { hasPermissionsMiddleware } = require("../utils/middlewares");

const transactionPermissionCreate = hasPermissionsMiddleware(["create-transactions"]);
const transactionPermissionRead = hasPermissionsMiddleware(["read-transactions"]);
const transactionPermissionUpdate = hasPermissionsMiddleware(["update-transactions"]);
const transactionPermissionDelete = hasPermissionsMiddleware(["delete-transactions"]);

module.exports = {
  transactionPermissionCreate,
  transactionPermissionRead,
  transactionPermissionUpdate,
  transactionPermissionDelete,
};
