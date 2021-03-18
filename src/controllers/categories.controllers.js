const categoryCtrl = {};

const category = require('../models/category');

categoryCtrl.getCategories = async (req, res) => {
    const categories = await categories.find();
    res.json(categories);
};

categoryCtrl.createCategory = async (req, res) => {
    const { name, description, date, cost,salePrice } = req.body;
    const newCategory = new category({
        name,
        description,
        date,
        cost,
        salePrice
        //image
    });
    await newCategory.save();
    res.json('New category added');
};

categoryCtrl.getCategory = async (req, res) => {
    const category = await category.findById(req.params.id);
    res.json(category);
}

categoryCtrl.deleteCategory = async (req, res) => {
    await category.findByIdAndDelete(req.params.id)
    res.json('category Deleted');
}

categoryCtrl.updateCategory = async (req, res) => {
    const { name, description, duration, date, cost,salePrice } = req.body;
    await category.findByIdAndUpdate(req.params.id, {
        name,
        description,
        duration,
        cost,
        saleprice
    });
    res.json('category Updated');
}

module.exports = categoryCtrl;