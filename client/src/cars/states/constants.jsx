export const CAR_DATA_INIT = {
  name: "",
  numberPlate: "",
  driverCost: "",
  carCost: "",
  price: null,
  stock: 1,
  owner: "",
  isDelete: false,
};

export const CAR_FIELD_GUIDE = ["name", "numberPlate","driverCost","carCost","price", "stock"];

export const CAR_FIELD_VALIDATION = ["name", "numberPlate","driverCost","carCost", "price", "stock"];

export const READ_CARS = "read-cars";
export const CREATE_CARS = "create-cars";
export const UPDATE_CARS = "update-cars";
export const DELETE_CARS = "delete-cars";
