const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./src/config/db')
const router = require('./src/router');
const mongoose = require('mongoose');

// connect database
db.connect();
// tạo app Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// router
router(app);

// Khởi động server
const PORT = 3000;
app.listen(PORT, () => console.log("server đang chạy!!! trên cổng http://localhost:" + PORT));