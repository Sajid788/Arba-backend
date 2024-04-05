const { ProductModel } = require("../model/product_model");


const getProducts = async (req, res) => {
  try {
    // Fetch all products
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getProducts
}