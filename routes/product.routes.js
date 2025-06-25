const express = require('express');
const router = express.Router();
const upload = require("../middlewares/multer.middleware");
const {authentication} = require("../middlewares/auth.middleware")

// const Product = require('../models/product.model');
const productController = require("../controllers/product.controller")

router.post('/products', upload.single('imageUrl') ,  authentication , productController.createProduct );

router.get('/products', productController.getProducts);

router.get('/products/:id',productController.getSingleProduct );

router.delete('/products/:id' , authentication , productController.deleteProduct );

router.put('/products/:id' , upload.single('imageUrl') , authentication , productController.updateProduct )

module.exports = router;





