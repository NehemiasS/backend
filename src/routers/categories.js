const { Router } = require('express');
const router = Router();

const { getCategories, createCategory, getCategory, deleteCategory, updateCategory} = require('../controllers/categories.controllers');

router.route('/')
    .get(getCategories)
    .post(createCategory);
 
router.route('/:id')
    .get(getCategory)
    .delete(deleteCategory)
    .put(updateCategory);

module.exports = router;