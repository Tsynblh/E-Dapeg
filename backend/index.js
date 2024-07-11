const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const db = require('./config/database');
const swagger = require('./config/swagger');

const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const orangTuaRoute = require('./routes/orangTuaRoute'); // Tambahkan ini untuk route orangTua

dotenv.config();

const app = express();

// Inisialisasi Sequelize Store untuk session
const store = new SequelizeStore({
    db: db,
});

// Sinkronisasi session store dengan database
store.sync();

// Middleware untuk session
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: store,
        cookie: {
            secure: "auto",
            httpOnly: true,
            maxAge: 3600000,
        },
    })
);

// Middleware lainnya
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use(userRoute);
app.use(authRoute);
app.use(orangTuaRoute);

// Serve dokumentasi Swagger UI
app.use('/api-docs', swagger.swaggerUi.serve, swagger.swaggerUi.setup(swagger.specs));

// Port
const PORT = process.env.APP_PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
