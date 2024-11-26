const express = require("express");
const {createCategory,getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../Controller/categoryController");

const router = express.Router();


router.post("/createCategory", createCategory);
router.get("/getAllCategories", getAllCategories);
router.get("/getCategoryById/:id", getCategoryById); 
router.put("/updateCategory/:id", updateCategory);  
router.delete("/deleteCategory/:id", deleteCategory); 

module.exports = router;
