require('./Components/DB');
require('./Components/Schema/productSchema');
require('./Components/Schema/registerSchema');

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Product = mongoose.model("product");
const Register = mongoose.model("register");

let Port = 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

// FrontEnd API's
app.post("/register", async (req,res) => {
    const user = new Register(req.body)
    let result = await user.save()

    result = result.toObject()
    delete result.password
    res.send(result);
});


app.post("/login", async (req,res) => {
    if (req.body.email && req.body.password) {
        await Register.findOne(req.body).select("-password")
        .then((data) => {
            if (data) {
                res.send(data);
            }else{
                res.send("User not Found!");
            }
        }).catch(() => {
            res.send(("User Error Found!"));
        })
    }
});


app.delete("/delete/:id", async (req,res) => {
    const user = await Register.deleteOne({_id:req.params.id});
    res.send(user);
});


app.delete("/delete-product/:id", async (req,res) => {
    const user = await Product.deleteOne({_id:req.params.id});
    res.send(user);
});


app.post("/add-product", (req,res) => {
    const user = new Product({
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        category: req.body.category
    })
    user.save()
    .then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err.message);
    })
});

app.get("/product/:id", async (req,res) => {
    const result = await Product.findOne({_id: req.params.id})
    .then( (data) => {
        res.send(data);
    }).catch(() => {
        res.send({result:"No result found!"})
    })
})

app.post("/product/:id", async (req,res) => {

    var myquery = {_id: req.params.id};
    var newvalues = { $set: {
        name: req.body.name, 
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category 
    }};
    const result = await Product.updateOne(myquery , newvalues)
    .then( (data) => {
        res.send(data);
    }).catch(() => {
        res.send({result:"No result update!"})
    })
})


app.get("/products", async (req,res) => {
    const allProducts = await Product.find();
    res.send(allProducts);
});



app.listen(Port, () => {
    console.log("Server Connected on Port: ",Port);
});