require("dotenv").config();
const express = require("express");
const cors = require('cors');

const { connection } = require("./config/db")
const {productRouter} = require("./routes/product_routes")

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Welcome to the home page!" });
});

// Routes
app.use("/product", productRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection();
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is running at ${process.env.PORT}`);
});
