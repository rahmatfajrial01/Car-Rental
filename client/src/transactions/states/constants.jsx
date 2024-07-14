export const TRANSACTION_DATA_INIT = {
  name: "",
  noKtp: "",
  address: "",
  noHp: "",
  carId: "",
  driverId: "",
  tanggalMulai: new Date().toISOString().split("T")[0],
  tanggalSelesai: new Date().toISOString().split("T")[0],
  // stock: 1,
  // owner: "",
  isDelete: false,
};

export const TRANSACTION_FIELD_GUIDE = [
  "name",
  "noKtp",
  "address",
  "noHp",
  "carId",
  "driverId",
  "stock",
  "tanggalMulai",
  "tanggalSelesai",
];

export const TRANSACTION_FIELD_VALIDATION = [
  "name",
  "noKtp",
  "address",
  "noHp",
  "carId",
  "driverId",
  "stock",
  "tanggalMulai",
  "tanggalSelesai",
];

export const READ_TRANSACTIONS = "read-transactions";
export const CREATE_TRANSACTIONS = "create-transactions";
export const UPDATE_TRANSACTIONS = "update-transactions";
export const DELETE_TRANSACTIONS = "delete-transactions";
