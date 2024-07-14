const { exceptionHandler, Error404, Error403 } = require("../utils/errors");
const { filterSearch } = require("../utils/filters");
const { buildPagination } = require("../utils/paginations");
const { Driver } = require("./models");

const driverControllerList = async (req, res) => {
  try {
    let result = Driver.find({ isDelete: false });
    result = filterSearch(req, result);
    result = await buildPagination(req, result);
    res.status(200).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const driverControllerCreate = async (req, res) => {
  try {
    const result = await Driver.create({
      ...res.locals.matchedData,
      owner: res.locals.user._id,
    });
    return res.status(201).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const driverControllerDetail = async (req, res) => {
  try {
    const result = await Driver.findOne({
      _id: req.params.id,
      isDelete: false,
    });

    if (!result) {
      throw new Error404();
    }


    return res.status(200).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const driverControllerUpdate = async (req, res) => {
  try {
    let result = await Driver.findOne({
      _id: req.params.id,
      isDelete: false,
    });
    if (!result) {
      throw new Error404();
    }

 

    result = await Driver.findOneAndUpdate(
      { _id: req.params.id },
      res.locals.matchedData,
      { new: true }
    );
    return res.status(200).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const driverControllerDelete = async (req, res) => {
  try {
    const result = await Driver.findOneAndUpdate(
      {
        _id: req.params.id,
        isDelete: false,
      },
      { isDelete: true }
    );

    if (!result) {
      throw new Error404();
    }

    return res.status(204).json(null);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

module.exports = {
  driverControllerList,
  driverControllerCreate,
  driverControllerDetail,
  driverControllerUpdate,
  driverControllerDelete,
};
