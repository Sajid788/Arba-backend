require("dotenv").config();
const express = require("express");
const cors = require('cors');

const { connection, PORT } = require("./config/db");
const { userRouter } = require("./routes/user_routes");
const {categoryRouter} = require("./routes/category_routes")
const {productRouter} = require("./routes/product_routes")
// const  authorization = require("./middleware/authorization")

const app = express();
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send({ msg: "Welcome to the home page!" });
});

// Routes
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);

// Not found route
app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(PORT, async () => {
  try {
    await connection;
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is running at ${PORT}`);
});
