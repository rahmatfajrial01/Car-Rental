const { default: mongoose } = require("mongoose");

const driverObject = {
  name: { type: String, required: true },
  noHp: { type: String, required: true },
  isAvailable: { type: Boolean, default: true },
  isDelete: { type: Boolean, default: false },
};

const driverSchema = new mongoose.Schema(driverObject, {
  versionKey: false,
  timestamps: true,
});

const Driver = new mongoose.model("Driver", driverSchema);

module.exports = {
  Driver,
  driverObject,
  driverSchema,
};
