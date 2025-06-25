const productModel = require("../models/product.model");



// create product

const createProduct = async (req, res) =>{
   const { title, description, price, category } = req.body;
   const imageUrl = req.file ? `/uploads/product_images/${req.file.filename}` : '';


    try{

        const newProduct = await productModel.create({
            title: title,
            description: description,
            price: price,
            imageUrl: imageUrl,
            category: category
        });
        
        res.status(201).json({
            message: "Product created successfully",
            newProduct: newProduct
        });
    }
    catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

// get all products

const getProducts = async (req , res) =>{
    try{
        const products = await productModel.find();
        res.status(200).json(products);
    }
    catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}



// get a single product by id 
const getSingleProduct = async (req , res)=>{
    const { id} = req.params;
    try {
        const product = await productModel.findById(id);
        console.log(product);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    }
    catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}


// update product 
const updateProduct = async (req , res) =>{
    const { id } = req.params;
    const { title , description , price , category} = req.body;
    const imageUrl = req.file ? req.file.path : '';

    try{

        const updatedProduct = await productModel.findByIdAndUpdate(id , {
            title: title,
            description: description,
            price: price,
            imageUrl: imageUrl,
            category: category
        }, { new: true });
        
        if(!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        
        res.status(200).json({
            message: "Product updated successfully",
            updatedProduct: updatedProduct
        });
    }
    catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
    
}


// delete product
const deleteProduct = async (req , res) =>{
    const { id } = req.params;

    try{

        const deletedProduct = await productModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        
        res.status(200).json({
            message: "Product deleted successfully",
            deletedProduct: deletedProduct
        });
        
    }
    catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

module.exports = {createProduct , getProducts , getSingleProduct , updateProduct , deleteProduct};