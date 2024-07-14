const { textField, numberField, dateField } = require("../utils/fields");
const { validationMiddleware } = require("../utils/middlewares");

const transactionValidationCreate = validationMiddleware([
  textField("name"),
  textField("noKtp"),
  textField("address"),
  textField("noHp"),
  textField("carId"),
  textField("driverId", true),
  dateField("tanggalMulai"),
  dateField("tanggalSelesai"),
]);

const transactionValidationUpdate = validationMiddleware([
  textField("status"),
  // textField("name"),
  // textField("noKtp"),
  // textField("address"),
  // textField("noHp"),
  textField("carId"),
  textField("driverId"),
  // dateField("tanggalMulai"),
  // dateField("tanggalSelesai"),
]);

module.exports = {
  transactionValidationCreate,
  transactionValidationUpdate,
};
