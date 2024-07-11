const User = require("../models/UserModel");
const argon2 = require("argon2");

exports.getUsers = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: [
        "uuid",
        "name",
        "tempatLahir",
        "tanggalLahir",
        "gender",
        "nik",
        "email",
        "notelp",
        "agama",
        "nip",
        "jabatan",
        "bagian",
        "grade",
        "atasan",
        "unitKerja",
        "role",
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      attributes: [
        "uuid",
        "name",
        "tempatLahir",
        "tanggalLahir",
        "gender",
        "nik",
        "email",
        "notelp",
        "agama",
        "nip",
        "jabatan",
        "bagian",
        "grade",
        "atasan",
        "unitKerja",
        "role",
      ],
      where: {
        uuid: req.params.id,
      },
    });
    if (!response) {
      return res.status(404).json({ msg: "User tidak ditemukan" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.createUser = async (req, res) => {
  const {
    name,
    tempatLahir,
    tanggalLahir,
    gender,
    nik,
    email,
    notelp,
    agama,
    nip,
    jabatan,
    bagian,
    grade,
    atasan,
    unitKerja,
    password,
    role,
  } = req.body;

  try {
    const hashedPassword = await argon2.hash(password);
    await User.create({
      name: name,
      tempatLahir: tempatLahir,
      tanggalLahir: tanggalLahir,
      gender: gender,
      nik: nik,
      email: email,
      notelp: notelp,
      agama: agama,
      nip: nip,
      jabatan: jabatan,
      bagian: bagian,
      grade: grade,
      atasan: atasan,
      unitKerja: unitKerja,
      password: hashedPassword,
      role: role,
    });
    res.status(201).json({ msg: "User berhasil dibuat" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const {
    name,
    tempatLahir,
    tanggalLahir,
    gender,
    nik,
    email,
    notelp,
    agama,
    nip,
    jabatan,
    bagian,
    grade,
    atasan,
    unitKerja,
    password,
    role,
  } = req.body;

  try {
    const user = await User.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!user) {
      return res.status(404).json({ msg: "User tidak ditemukan" });
    }

    let hashedPassword = user.password;
    if (password) {
      hashedPassword = await argon2.hash(password);
    }

    await user.update({
      name,
      tempatLahir,
      tanggalLahir,
      gender,
      nik,
      email,
      notelp,
      agama,
      nip,
      jabatan,
      bagian,
      grade,
      atasan,
      unitKerja,
      password: hashedPassword,
      role,
    });

    res.status(200).json({ msg: "User berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!user) {
      return res.status(404).json({ msg: "User tidak ditemukan" });
    }

    await user.destroy();
    res.status(200).json({ msg: "User berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
