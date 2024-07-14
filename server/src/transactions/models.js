const { default: mongoose } = require("mongoose");

const transactionObject = {
  name: { type: String, required: true },
  noKtp: { type: String, required: true },
  address: { type: String, required: true },
  noHp: { type: String, required: true },
  carId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
  },
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver",
    required: false,
  },
  tanggalMulai: { type: Date, required: true },
  tanggalSelesai: { type: Date, required: true },
  status: { type: String, default: "dipinjam" },
  isDelete: { type: Boolean, default: false },
};

const transactionSchema = new mongoose.Schema(transactionObject, {
  versionKey: false,
  timestamps: true,
});

const Transaction = new mongoose.model("Transaction", transactionSchema);

module.exports = {
  Transaction,
  transactionObject,
  transactionSchema,
};
