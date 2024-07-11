/**
 * @swagger
 * tags:
 *   name: OrangTua
 *   description: OrangTua management endpoints
 * components:
 *   schemas:
 *     OrangTua:
 *       type: object
 *       properties:
 *         uuid:
 *           type: string
 *           example: "1234567890"
 *         userId:
 *           type: string
 *           example: "0987654321"
 *         namaLengkap:
 *           type: string
 *           example: "Jane Doe"
 *         status:
 *           type: string
 *           example: "Ibu"
 *         tempatLahir:
 *           type: string
 *           example: "Bandung"
 *         tanggalLahir:
 *           type: string
 *           format: date
 *           example: "1965-02-15"
 *         alamat:
 *           type: string
 *           example: "Jl. Sudirman No. 10, Bandung"
 *         uploadBerkas:
 *           type: string
 *           example: "path/to/berkas.pdf"
 *         statusApproval:
 *           type: string
 *           example: "Menunggu"
 *
 *     CreateOrangTuaRequest:
 *       type: object
 *       properties:
 *         namaLengkap:
 *           type: string
 *           example: "Jane Doe"
 *         status:
 *           type: string
 *           example: "Ibu"
 *         tempatLahir:
 *           type: string
 *           example: "Bandung"
 *         tanggalLahir:
 *           type: string
 *           format: date
 *           example: "1965-02-15"
 *         alamat:
 *           type: string
 *           example: "Jl. Sudirman No. 10, Bandung"
 *         uploadBerkas:
 *           type: string
 *           example: "path/to/berkas.pdf"
 *
 *     GeneralResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: "Operation successful"
 *         data:
 *           type: object
 *           example: {}
 *
 *     GetOrangTuaResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/GeneralResponse'
 *         - type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/OrangTua'
 *
 *     UpdateOrangTuaResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/GeneralResponse'
 */

/**
 * @swagger
 * /orangtua:
 *   get:
 *     summary: Get all orang tua
 *     description: Retrieve a list of all orang tua.
 *     tags: [OrangTua]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successfully retrieved orang tua
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrangTua'
 *       '500':
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 */

/**
 * @swagger
 * /orangtua/{id}:
 *   get:
 *     summary: Get orang tua by ID
 *     description: Retrieve orang tua information based on the provided ID.
 *     tags: [OrangTua]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the orang tua
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Orang tua found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetOrangTuaResponse'
 *       '404':
 *         description: Orang tua not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 *       '500':
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 */

/**
 * @swagger
 * /orangtua:
 *   post:
 *     summary: Create a new orang tua
 *     description: Create a new orang tua with provided details.
 *     tags: [OrangTua]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateOrangTuaRequest'
 *     responses:
 *       '201':
 *         description: Orang tua created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetOrangTuaResponse'
 *       '500':
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 */

/**
 * @swagger
 * /orangtua/{id}:
 *   patch:
 *     summary: Update orang tua by ID
 *     description: Update orang tua information based on the provided ID.
 *     tags: [OrangTua]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the orang tua
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateOrangTuaRequest'
 *     responses:
 *       '200':
 *         description: Orang tua updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 *       '404':
 *         description: Orang tua not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 *       '500':
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 */

/**
 * @swagger
 * /orangtua/{id}:
 *   delete:
 *     summary: Delete orang tua by ID
 *     description: Delete orang tua based on the provided ID.
 *     tags: [OrangTua]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the orang tua
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Orang tua deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 *       '404':
 *         description: Orang tua not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 *       '500':
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 */

const express = require('express');
const router = express.Router();

const {
  getAllDataOrangTua,
  getDataOrangTuaById,
  createDataOrangTua,
  updateDataOrangTua,
  deleteDataOrangTua
} = require('../controllers/dataOrangTua');
const { verifyUser, adminOnly } = require('../middleware/AuthUser');

router.get('/orangtua', verifyUser, getAllDataOrangTua);
router.get('/orangtua/:id', verifyUser, getDataOrangTuaById);
router.post('/orangtua', verifyUser, createDataOrangTua);
router.patch('/orangtua/:id', verifyUser, updateDataOrangTua);
router.delete('/orangtua/:id', verifyUser, deleteDataOrangTua);

module.exports = router;
