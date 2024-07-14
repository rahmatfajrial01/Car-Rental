const { default: mongoose } = require("mongoose");

const carObject = {
  name: { type: String, required: true },
  numberPlate: { type: String, required: true },
  driverCost: { type: Number, required: true },
  carCost: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true },
  isDelete: { type: Boolean, default: false },
};

const carSchema = new mongoose.Schema(carObject, {
  versionKey: false,
  timestamps: true,
});

const Car = new mongoose.model("Car", carSchema);

module.exports = {
  Car,
  carObject,
  carSchema,
};
