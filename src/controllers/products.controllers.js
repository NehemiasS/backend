const productCtrl = {};

const product = require('../models/Prodcut');

productCtrl.getProducts = async (req, res) => {
    const products = await product.find();
    res.json(products);
};

productCtrl.createProduct = async (req, res) => {
    const { name, description, date, supplier } = req.body;
    const newProduct = new product({
        name,
        description,
        date,
        supplier
    });
    await newProduct.save();
    res.json('New Product added');
};

productCtrl.getProduct = async (req, res) => {
    const product = await product.findById(req.params.id);
    res.json(product);
}

productCtrl.deleteProduct = async (req, res) => {
    await product.findByIdAndDelete(req.params.id)
    res.json('product Deleted');
}

productCtrl.updateProduct = async (req, res) => {
    const { name, description, duration, date, supplier } = req.body;
    await product.findByIdAndUpdate(req.params.id, {
        name,
        description,
        duration,
        supplier
    });
    res.json('Product Updated');
}

module.exports = productCtrl;