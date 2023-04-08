const mongoose = require("mongoose");
const DB = "mongodb://localhost:27017/Ecommerce"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected.");
}).catch((err) => {
    console.log("Sorry! database not connected!");
})