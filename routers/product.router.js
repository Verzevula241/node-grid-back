const productController = require("../controllers/product.controller");
//set default API response
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get("/", productController.index)
    app.get("/product", productController.index)
    app.get('/view/:view_id', productController.find);
    app.get('/views/:data_id',productController.getviews)
    app.post('/view',productController.add)


};