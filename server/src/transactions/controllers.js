const { exceptionHandler, Error404, Error403 } = require("../utils/errors");
const { filterSearch } = require("../utils/filters");
const { buildPagination } = require("../utils/paginations");
const { Transaction } = require("./models");
const { Car } = require("../cars/models");
const { Driver } = require("../drivers/models");

const transactionControllerList = async (req, res) => {
  try {
    let result = Transaction.find({ isDelete: false })
      .populate("driverId")
      .populate("carId");
    result = filterSearch(req, result);
    result = await buildPagination(req, result);
    // console.log(result);
    res.status(200).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const transactionControllerCreate = async (req, res) => {
  try {
    const result = await Transaction.create({
      ...res.locals.matchedData,
      // owner: res.locals.user._id,
    });
    if (result) {
      await Car.findByIdAndUpdate(res.locals.matchedData.carId, {
        isAvailable: false,
      });
      await Driver.findByIdAndUpdate(res.locals.matchedData.driverId, {
        isAvailable: false,
      });
    }
    return res.status(201).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const transactionControllerDetail = async (req, res) => {
  try {
    const result = await Transaction.findOne({
      _id: req.params.id,
      isDelete: false,
    })
      .populate("driverId")
      .populate("carId");

    if (!result) {
      throw new Error404();
    }

    return res.status(200).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const transactionControllerUpdate = async (req, res) => {
  try {
    let result = await Transaction.findOne({
      _id: req.params.id,
      isDelete: false,
    });
    if (!result) {
      throw new Error404();
    }
    console.log(res.locals.matchedData);

    result = await Transaction.findOneAndUpdate(
      { _id: req.params.id },
      { status: "selesai" },
      { new: true }
    );

    if (result && result.status == "selesai") {
      await Car.findByIdAndUpdate(result.carId, {
        isAvailable: true,
      });
      await Driver.findByIdAndUpdate(result.driverId, {
        isAvailable: true,
      });
    }

    return res.status(200).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const transactionControllerDelete = async (req, res) => {
  try {
    const result = await Transaction.findOneAndUpdate(
      {
        _id: req.params.id,
        isDelete: false,
      },
      { isDelete: true }
    );

    if (!result) {
      throw new Error404();
    }

    if (result) {
      await Car.findByIdAndUpdate(result.carId, {
        isAvailable: true,
      });
      await Driver.findByIdAndUpdate(result.driverId, {
        isAvailable: true,
      });
    }

    return res.status(204).json(null);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

module.exports = {
  transactionControllerList,
  transactionControllerCreate,
  transactionControllerDetail,
  transactionControllerUpdate,
  transactionControllerDelete,
};
