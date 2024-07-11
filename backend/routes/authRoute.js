/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoints untuk autentikasi dan sesi pengguna
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: "john.doe@example.com"
 *         password:
 *           type: string
 *           example: "password123"
 *
 *     AuthResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: "Login berhasil"
 *         data:
 *           type: object
 *           properties:
 *             uuid:
 *               type: string
 *               example: "1234567890"
 *             name:
 *               type: string
 *               example: "John Doe"
 *             tempatLahir:
 *               type: string
 *               example: "Jakarta"
 *             tanggalLahir:
 *               type: string
 *               example: "1990-01-01"
 *             gender:
 *               type: string
 *               example: "male"
 *             nik:
 *               type: string
 *               example: "1234567890123456"
 *             email:
 *               type: string
 *               format: email
 *               example: "john.doe@example.com"
 *             notelp:
 *               type: string
 *               example: "+1234567890"
 *             agama:
 *               type: string
 *               example: "Islam"
 *             nip:
 *               type: string
 *               example: "1234567890123456"
 *             jabatan:
 *               type: string
 *               example: "Manager"
 *             bagian:
 *               type: string
 *               example: "Human Resources"
 *             grade:
 *               type: string
 *               example: "A"
 *             atasan:
 *               type: string
 *               example: "Supervisor"
 *             unitKerja:
 *               type: string
 *               example: "Department A"
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Melakukan login pengguna
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       "200":
 *         description: Login berhasil
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       "400":
 *         description: Kesalahan input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Password tidak valid"
 *       "500":
 *         description: Kesalahan server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Terjadi kesalahan server"
 */

/**
 * @swagger
 * /me:
 *   get:
 *     summary: Mendapatkan informasi pengguna yang sedang login
 *     tags: [Auth]
 *     security:
 *       - session: []
 *     responses:
 *       "200":
 *         description: Informasi pengguna berhasil didapatkan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       "401":
 *         description: Pengguna tidak terautentikasi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Mohon login ke akun Anda!"
 *       "500":
 *         description: Kesalahan server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Terjadi kesalahan server"
 */

/**
 * @swagger
 * /logout:
 *   delete:
 *     summary: Melakukan logout pengguna
 *     tags: [Auth]
 *     security:
 *       - session: []
 *     responses:
 *       "200":
 *         description: Berhasil logout
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Anda telah logout"
 *       "400":
 *         description: Gagal logout
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Tidak dapat logout"
 */

const express = require('express');
const { Login, Me, LogOut } = require('../controllers/Auth');

const router = express.Router();

router.post('/login', Login);
router.get('/me', Me);
router.delete('/logout', LogOut);

module.exports = router;
