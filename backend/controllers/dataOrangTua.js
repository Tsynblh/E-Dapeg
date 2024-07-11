const OrangTua = require('../models/OrangTuaModel');
const User = require('../models/UserModel'); // Menggunakan User dari UserModel
const moment = require('moment');

// Controller untuk mendapatkan semua data orang tua berdasarkan user yang sedang login
exports.getAllDataOrangTua = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId); // Temukan data user berdasarkan userId dari sesi
    if (!user) {
      return res.status(404).json({ msg: "User tidak ditemukan" });
    }

    const dataOrangTua = await OrangTua.findAll({
      where: { userId: req.userId } // Ambil semua data OrangTua yang terkait dengan user yang sedang login
    });

    res.status(200).json(dataOrangTua);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk mendapatkan data orang tua berdasarkan ID
exports.getDataOrangTuaById = async (req, res) => {
  const id = req.params.id;
  try {
    const dataOrangTua = await OrangTua.findOne({
      where: { id, userId: req.userId } // Cari data OrangTua berdasarkan ID dan user yang sedang login
    });
    if (!dataOrangTua) {
      return res.status(404).json({ msg: `Data orang tua dengan ID ${id} tidak ditemukan` });
    }
    res.status(200).json(dataOrangTua);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk membuat data orang tua baru
exports.createDataOrangTua = async (req, res) => {
    try {
      // Ambil informasi user berdasarkan req.userId
      const user = await User.findByPk(req.userId);
      if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  
      // Ambil data dari request body
      const {
        namaLengkap,
        status,
        tempatLahir,
        tanggalLahir,
        alamat,
        uploadBerkas,
      } = req.body;
  
      // Buat objek OrangTua baru
      const orangTua = await OrangTua.create({
        namaLengkap,
        status,
        tempatLahir,
        tanggalLahir: moment(tanggalLahir).format("YYYY-MM-DD"),
        alamat,
        uploadBerkas,
        userId: req.userId, // Assosiasikan dengan userId yang sedang login
        statusApproval: "Menunggu", // Default status approval
      });
  
      res.status(201).json({ msg: "Orang Tua Created Successfully", orangTua });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

// Controller untuk mengupdate data orang tua berdasarkan ID
exports.updateDataOrangTua = async (req, res) => {
  const id = req.params.id;
  const {
    namaLengkap,
    status,
    tempatLahir,
    tanggalLahir,
    alamat,
    uploadBerkas,
    statusApproval,
  } = req.body;

  try {
    const dataOrangTua = await OrangTua.findOne({
      where: { id, userId: req.userId } // Cari data OrangTua berdasarkan ID dan user yang sedang login
    });
    if (!dataOrangTua) {
      return res.status(404).json({ msg: `Data orang tua dengan ID ${id} tidak ditemukan` });
    }

    await dataOrangTua.update({
      namaLengkap,
      status,
      tempatLahir,
      tanggalLahir: moment(tanggalLahir).format('YYYY-MM-DD'), // Format tanggal sesuai kebutuhan
      alamat,
      uploadBerkas,
      statusApproval,
    });

    res.status(200).json({ msg: `Data orang tua dengan ID ${id} berhasil diperbarui` });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Controller untuk menghapus data orang tua berdasarkan ID
exports.deleteDataOrangTua = async (req, res) => {
  const id = req.params.id;

  try {
    const dataOrangTua = await OrangTua.findOne({
      where: { id, userId: req.userId } // Cari data OrangTua berdasarkan ID dan user yang sedang login
    });
    if (!dataOrangTua) {
      return res.status(404).json({ msg: `Data orang tua dengan ID ${id} tidak ditemukan` });
    }

    await dataOrangTua.destroy();
    res.status(200).json({ msg: `Data orang tua dengan ID ${id} berhasil dihapus` });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
