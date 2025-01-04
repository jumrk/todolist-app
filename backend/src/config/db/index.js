const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/todolist');
        console.log("connect successfully!!!");
    } catch (error) {
        console.error("connect failure:", error.message);
    }
}

module.exports = { connect };
