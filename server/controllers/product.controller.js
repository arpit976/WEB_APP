import Product from '../models/product.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'

const getAllProducts = async (req, res) => {
    try {
        // Retrieve all products from the database
        const products = await Product.find();

        // Return the products as JSON response
        res.json(products);
    } catch (err) {
        // If an error occurs, return an error response
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};

const findProductById = async (req, res) => {
    try {
        const productId = req.params.id;

        // Find the product by its ID
        const product = await Product.findById(productId);

        // Check if product exists
        if (!product) {
            return res.status(404).json({
                error: "Product not found"
            });
        }

        // If product exists, return it
        res.json(product);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};
const addNewProduct = async (req, res) => {
    try {
        // Extract product details from request body
        const { name, description, price, quantity, category } = req.body;

        // Create a new product instance
        const product = new Product({
            name,
            description,
            price,
            quantity,
            category
        });

        // Save the product to the database
        await product.save();

        // Return success message
        res.status(201).json({
            message: "Product added successfully",
            product
        });
    } catch (err) {
        // If an error occurs, return an error response
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};
const updateProductById = async (req, res) => {
    try {
        const productId = req.params.id;

        // Find the product by its ID
        let product = await Product.findById(productId);

        // Check if product exists
        if (!product) {
            return res.status(404).json({
                error: "Product not found"
            });
        }

        // Update product details with the data from the request body
        product.set(req.body);

        // Save the updated product
        product = await product.save();

        // Return the updated product
        res.json(product);
    } catch (err) {
        // If an error occurs, return an error response
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};
const removeProductById = async (req, res) => {
    try {
        const productId = req.params.id;

        // Find the product by its ID and remove it
        const deletedProduct = await Product.findByIdAndDelete(productId);

        // Check if product exists
        if (!deletedProduct) {
            return res.status(404).json({
                error: "Product not found"
            });
        }

        // Return the deleted product
        res.json(deletedProduct);
    } catch (err) {
        // If an error occurs, return an error response
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};
const removeAllProducts = async (req, res) => {
    try {
        // Remove all products from the database
        const deletedProducts = await Product.deleteMany();

        // Return the deleted products
        res.json(deletedProducts);
    } catch (err) {
        // If an error occurs, return an error response
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};
const findProductsByNameKeyword = async (req, res) => {
    try {
        const { name } = req.query;

        // Perform a case-insensitive search for products whose names contain the provided keyword
        const products = await Product.find({ name });

        res.json(products);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};
export default {getAllProducts, findProductById, addNewProduct, updateProductById, removeProductById, removeAllProducts, findProductsByNameKeyword}
