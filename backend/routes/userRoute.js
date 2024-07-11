/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management endpoints
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         uuid:
 *           type: string
 *           example: "1234567890"
 *         name:
 *           type: string
 *           example: "John Doe"
 *         tempatLahir:
 *           type: string
 *           example: "Jakarta"
 *         tanggalLahir:
 *           type: string
 *           example: "1990-01-01"
 *         gender:
 *           type: string
 *           example: "male"
 *         nik:
 *           type: string
 *           example: "1234567890123456"
 *         email:
 *           type: string
 *           format: email
 *           example: "john.doe@example.com"
 *         notelp:
 *           type: string
 *           example: "+1234567890"
 *         agama:
 *           type: string
 *           example: "Islam"
 *         nip:
 *           type: string
 *           example: "1234567890123456"
 *         jabatan:
 *           type: string
 *           example: "Manager"
 *         bagian:
 *           type: string
 *           example: "Human Resources"
 *         grade:
 *           type: string
 *           example: "A"
 *         atasan:
 *           type: string
 *           example: "Supervisor"
 *         unitKerja:
 *           type: string
 *           example: "Department A"
 *         password:
 *           type: string
 *           example: "password123"
 *         role:
 *           type: string
 *           example: "admin"
 *
 *     CreateUserRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "John Doe"
 *         tempatLahir:
 *           type: string
 *           example: "Jakarta"
 *         tanggalLahir:
 *           type: string
 *           example: "1990-01-01"
 *         gender:
 *           type: string
 *           example: "male"
 *         nik:
 *           type: string
 *           example: "1234567890123456"
 *         email:
 *           type: string
 *           format: email
 *           example: "john.doe@example.com"
 *         notelp:
 *           type: string
 *           example: "+1234567890"
 *         agama:
 *           type: string
 *           example: "Islam"
 *         nip:
 *           type: string
 *           example: "1234567890123456"
 *         jabatan:
 *           type: string
 *           example: "Manager"
 *         bagian:
 *           type: string
 *           example: "Human Resources"
 *         grade:
 *           type: string
 *           example: "A"
 *         atasan:
 *           type: string
 *           example: "Supervisor"
 *         unitKerja:
 *           type: string
 *           example: "Department A"
 *         password:
 *           type: string
 *           example: "password123"
 *         role:
 *           type: string
 *           example: "admin"
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
 *     GetUserResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/GeneralResponse'
 *         - type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/User'
 *
 *     UpdateUserResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/GeneralResponse'
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users.
 *     tags: [User]
 *     responses:
 *       '200':
 *         description: Successfully retrieved users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '500':
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Retrieve user information based on the provided ID.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetUserResponse'
 *       '404':
 *         description: User not found
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
 * /users:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with provided details.
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserRequest'
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetUserResponse'
 *       '500':
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 */

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Update user by ID
 *     description: Update user information based on the provided ID.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 *       '404':
 *         description: User not found
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
 * /users/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     description: Delete user based on the provided ID.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 *       '404':
 *         description: User not found
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

const userController = require('../controllers/User');

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.patch('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
