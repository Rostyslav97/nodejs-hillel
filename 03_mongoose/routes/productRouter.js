import express from 'express';
const router = express.Router();

import Product from '../models/Product.js';
const categories = ['Electronics', 'Clothing', 'Books', 'Sports', 'Other'];

router.get('/', async (req, res) => {
    try {
        const product = await Product.find()
            .select('name price -_id')
            .sort({ createdAt: 1 })
            .limit(3);
            
        res.json(product);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
});

router.get('/create', async (req, res) => {
    res.render('create', { categories, errors: {}, formData: {} });

});

router.post('/', async (req, res) => {
    try {
        const { name, price, category, description, inStock, quantity } = req.body;
        const product = new Product({
            name,
            price: parseFloat(price),
            category,
            description,
            inStock: inStock === 'on',
            quantity: parseInt(quantity) || 0
        });
        await product.save();
        console.log('Product created:', product.name);
        res.redirect('/products');
    }
    catch (error) {
        console.log('Error creating product : ', error);
        if (error.name === 'ValidationError') {
            const errors = {};
            Object.keys(error.errors).forEach(key => {
                errors[key] = error.errors[key].message;
            })
            return res.render('create', {
                categories, errors, formData: req.body
            })
        }
        res.status(500).send('error');
    }
});

//! UPDATE
router.get('/:id/edit', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('404')
        }
        res.render('edit', { product, categories, errors: {} });
    }
    catch (error) {
        onsole.error('Error loading product:', error);
        res.status(500).send('Error loading product');
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { name, price, category, description, inStock, quantity } = req.body;
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            {
                name,
                price: parseFloat(price),
                category,
                description,
                inStock: inStock === 'on',
                quantity: parseInt(quantity) || 0
            },
            {
                new: true,
                runValidators: true
            }
        );
        if (!product) {
            return res.status(404).render('error', { message: 'Product not found' });
        }
        console.log('Product updated:', product.name);
        res.redirect('/products');

    }
    catch (error) {
        console.log(error);
        if (error.name === 'ValidationError') {
            const errors = {};
            Object.keys(error.errors).forEach(key => {
                errors[key] = error.errors[key].message;
            });
            const product = await Product.findById(req.params.id);
            return res.render('edit', {
                product: { ...product._doc, ...req.body },
                categories,
                errors
            });
        }
        res.status(500).send('Error updating product');
    }
})

// ! DELETE
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).send('Product not found');
        }

        console.log(' Product deleted:', product.name);
        res.redirect('/products');
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).send('Error deleting product');
    }
});

// READ
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).send('Product not found');
        }

        res.json(product)
    } catch (error) {
        console.error('Error loading product:', error);
        res.status(500).send('Error loading product');
    }
});


export default router;
