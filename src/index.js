require("dotenv").config();
const express = require("express");
const cors = require('cors');

const { connection } = require("./config/db")
const { productController} = require("./controller/product_controller")

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Welcome to the home page!" });
});

// Routes
app.use("/product",  productController);



app.listen(process.env.PORT, async () => {
  try {
    await connection();
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is running at ${process.env.PORT}`);
});
