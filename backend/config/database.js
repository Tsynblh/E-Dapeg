const { Sequelize } = require('sequelize');

const db = new Sequelize("cobaEDapeg", "root", "", {
  host: "localhost",
  dialect: "mysql",
  timezone: "Asia/Makassar",
  // port: 3306,
});

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



module.exports = db;