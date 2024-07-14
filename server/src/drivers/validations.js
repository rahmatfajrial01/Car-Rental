const { textField, numberField } = require("../utils/fields");
const { validationMiddleware } = require("../utils/middlewares");

const driverValidationCreate = validationMiddleware([
  textField("name"),
  textField("noHp"),
]);

const driverValidationUpdate = validationMiddleware([
  textField("name"),
  textField("noHp"),
]);

module.exports = {
  driverValidationCreate,
  driverValidationUpdate,
};
