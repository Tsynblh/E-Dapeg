const User = require("../models/UserModel");
const argon2 = require("argon2");

const Login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (!user) {
            return res.status(404).json({ msg: "Pengguna tidak ditemukan" });
        }

        const match = await argon2.verify(user.password, req.body.password);
        if (!match) {
            return res.status(400).json({ msg: "Password tidak valid" });
        }

        req.session.userId = user.uuid;

        const {
            uuid,
            name,
            email,
            tempatLahir,
            tanggalLahir,
            gender,
            nik,
            notelp,
            agama,
            nip,
            jabatan,
            bagian,
            grade,
            atasan,
            unitKerja
        } = user;

        res.status(200).json({
            success: true,
            message: "Login berhasil",
            data: {
                uuid,
                name,
                email,
                tempatLahir,
                tanggalLahir,
                gender,
                nik,
                notelp,
                agama,
                nip,
                jabatan,
                bagian,
                grade,
                atasan,
                unitKerja
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Terjadi kesalahan server" });
    }
};

const Me = async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
        }

        const user = await User.findOne({
            attributes: [
                'uuid',
                'name',
                'email',
                'tempatLahir',
                'tanggalLahir',
                'gender',
                'nik',
                'notelp',
                'agama',
                'nip',
                'jabatan',
                'bagian',
                'grade',
                'atasan',
                'unitKerja'
            ],
            where: {
                uuid: req.session.userId
            }
        });

        if (!user) {
            return res.status(404).json({ msg: "Pengguna tidak ditemukan" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Terjadi kesalahan server" });
    }
};

const LogOut = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(400).json({ msg: "Tidak dapat logout" });
        }
        res.status(200).json({ msg: "Anda telah logout" });
    });
};

module.exports = {
    Login,
    Me,
    LogOut
};
