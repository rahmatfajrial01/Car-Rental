const { exceptionHandler, Error404, Error403 } = require("../utils/errors");
const { filterSearch } = require("../utils/filters");
const { buildPagination } = require("../utils/paginations");
const { Car } = require("./models");

const carControllerList = async (req, res) => {
  try {
    let result = Car.find({ isDelete: false });
    result = filterSearch(req, result);
    result = await buildPagination(req, result);
    res.status(200).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const carControllerCreate = async (req, res) => {
  try {
    const result = await Car.create({
      ...res.locals.matchedData,
      owner: res.locals.user._id,
    });
    return res.status(201).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const carControllerDetail = async (req, res) => {
  try {
    const result = await Car.findOne({
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

const carControllerUpdate = async (req, res) => {
  try {
    let result = await Car.findOne({
      _id: req.params.id,
      isDelete: false,
    });
    if (!result) {
      throw new Error404();
    }

 

    result = await Car.findOneAndUpdate(
      { _id: req.params.id },
      res.locals.matchedData,
      { new: true }
    );
    return res.status(200).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const carControllerDelete = async (req, res) => {
  try {
    const result = await Car.findOneAndUpdate(
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
  carControllerList,
  carControllerCreate,
  carControllerDetail,
  carControllerUpdate,
  carControllerDelete,
};
