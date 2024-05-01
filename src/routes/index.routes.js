const productsRouter = require('./product.routes');

const registerRoutes = (app) => {
    app.use('/api/v1/products', productsRouter);
}

module.exports = registerRoutes;