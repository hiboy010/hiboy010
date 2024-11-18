const express = require('express');
const app = express();
const { Supplier, Product, Order } = require('./model');

app.use(express.json());
app.use(express.static('pub'));


app.get('/products', async (req, res) => {
    const products = await Product.findAll({ include: Supplier });
    res.json(products);
});

app.post('/products', async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
