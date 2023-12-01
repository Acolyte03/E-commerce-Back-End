
const { Product } = require('../models');
const productData = 
[
    {
        product_name: 'T-Shirt',
        price: 15.00,
        stock: 15,
        category_id: 1,
    },{
        product_name: 'Sneakers',
        price: 100,
        stock: 15,
        category_id: 5,
    },{
        product_name: 'Baseball Hat',
        price: 22.00,
        stock: 35,
        category_id: 4,
    },{
        product_name: 'Vinyl Record',
        price: 10.00,
        stock: 105,
        category_id: 3,
    },{
        product_name: 'Shorts',
        price: 25,
        stock: 45,
        category_id: 2,
    },
];

const Products = () => Product.bulkCreate(productData);
module.exports = Products;