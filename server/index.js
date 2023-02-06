const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true});

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDB database connection established sauccessfully");
});

const qrcodesRouter = require("./routes/qr-codes");
const usersRouter = require("./routes/users");

app.use("/items",qrcodesRouter);
app.use("/users",usersRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});