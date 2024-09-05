const express = require('express'); // Import the Express framework
const app = express(); // Create an instance of the Express application

// Use the cors middleware to enable CORS
const cors = require('cors'); // Import the cors package
app.use(cors());

// Use the userController as middleware
const userController = require('./app.controllers/controller.user.js'); // Adjust the path to your userController file
app.put('/users/:id', userController); // You can specify a base route like "/api" if needed
app.get('/users', userController);
app.get('/users/:id', userController);
app.delete('/users/:id', userController);
app.post('/users', userController);

// Use the productsController as middleware
const productController = require('./app.controllers/controller.product.js');
app.get('/products', productController);
app.get('/products/:id', productController);
app.put('/products/:id', productController); // You can specify a base route like "/api" if needed
app.delete('/products/:id', productController);
app.post('/products', productController);

// Use the shoppingcartController as middleware
const shoppingCartController = require('./app.controllers/controller.shoppingcart.js');
app.get('/shoppingcart', shoppingCartController);
app.get('/shoppingcart/:id', shoppingCartController);
app.put('/shoppingcart/:id', shoppingCartController); // You can specify a base route like "/api" if needed
app.delete('/shoppingcart/:id', shoppingCartController);
app.delete('/shoppingcart', shoppingCartController);
app.post('/shoppingcart', shoppingCartController);

// Use the ordersController as middleware
const ordersController = require('./app.controllers/controller.orders.js');
app.get('/orders', ordersController);
app.get('/orders/:id', ordersController);
app.put('/orders/:id', ordersController); // You can specify a base route like "/api" if needed
app.delete('/orders/:id', ordersController);
app.post('/orders', ordersController);


module.exports = app; // Export the Express application to be used in other parts of your project
