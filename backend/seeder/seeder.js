import mongoose from "mongoose";
import products from "./data.js";
import Product from "../model/productModel.js";

const seedProducts = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jlalzytwn90:VUdRMv4Gyx9bo0GF@shopit.inusspk.mongodb.net/ShopIt?retryWrites=true&w=majority&appName=ShopIt"
    );

    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("Products are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
