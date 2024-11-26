const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Category name is required"],
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Category", categorySchema);
