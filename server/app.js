const express = require("express");
const cors = require("cors");

const { connectDB } = require("./src/utils/databases");
const {
  permissionRouter,
  PERMISSION_PATH,
} = require("./src/permissions/routers");
const { ROLE_PATH, roleRouter } = require("./src/roles/routers");
const { USER_PATH, userRouter } = require("./src/users/routers");
const { ME_PATH, meRouter } = require("./src/me/routers");
const { PRODUCT_PATH, productRouter } = require("./src/products/routers");
const { DRIVER_PATH, driverRouter } = require("./src/drivers/routers");
const { CAR_PATH, carRouter } = require("./src/cars/routers");
const {
  TRANSACTION_PATH,
  transactionRouter,
} = require("./src/transactions/routers");
const { ORDER_PATH, orderRouter } = require("./src/orders/routers");

connectDB();
const app = express();

app.use(express.json());

app.use(cors({ origin: process.env.API_ORIGIN }));

app.use(PERMISSION_PATH, permissionRouter);
app.use(ROLE_PATH, roleRouter);
app.use(USER_PATH, userRouter);
app.use(ME_PATH, meRouter);
// app.use(PRODUCT_PATH, productRouter);
app.use(DRIVER_PATH, driverRouter);
app.use(CAR_PATH, carRouter);
app.use(TRANSACTION_PATH, transactionRouter);
// app.use(ORDER_PATH, orderRouter);

module.exports = {
  app,
};
