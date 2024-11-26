const express = require("express");
const { connectDB } = require("./config/DB");
const categoryRoutes = require("./Route/categoryRoutes");
const productRoutes = require("./Route/productRoutes");

const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Node js');
});

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);


app.listen(PORT, () => {
  console.log(`Example app listening on http://localhost:${PORT}/`);
});

