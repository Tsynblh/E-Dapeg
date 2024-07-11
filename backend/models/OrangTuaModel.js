const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./UserModel");

const OrangTua = sequelize.define("OrangTua", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  namaLengkap: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  tempatLahir: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  tanggalLahir: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  uploadBerkas: {
    type: DataTypes.STRING,
    allowNull: true, // Can be null if no file is uploaded
  },
  statusApproval: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    defaultValue: "Menunggu", // Default status
  },
});

// Definisi asosiasi antara User dan OrangTua
User.hasMany(OrangTua);
OrangTua.belongsTo(User, { foreignKey: "userId" });

module.exports = OrangTua;
