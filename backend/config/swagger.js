const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'E-DAPEG API',
      version: '1.0.0',
      description: 'API Documentation for E-DAPEG backend',
    },
    servers: [
      {
        url: 'http://localhost:5000', // Ganti dengan URL server Anda jika berbeda
        description: 'Development server',
      },
    ],
  },
  apis: [`${__dirname}/../routes/*.js`], // Path ke file-file routes Anda
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
