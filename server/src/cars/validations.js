const { textField, numberField } = require("../utils/fields");
const { validationMiddleware } = require("../utils/middlewares");

const carValidationCreate = validationMiddleware([
  textField("name"),
  textField("numberPlate"),
  numberField("driverCost"),
  numberField("carCost"),
]);

const carValidationUpdate = validationMiddleware([
  textField("name"),
  textField("numberPlate"),
  numberField("driverCost"),
  numberField("carCost"),
]);

module.exports = {
  carValidationCreate,
  carValidationUpdate,
};
