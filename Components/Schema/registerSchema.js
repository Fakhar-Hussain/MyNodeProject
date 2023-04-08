const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: Number,
})

mongoose.model("register", registerSchema);