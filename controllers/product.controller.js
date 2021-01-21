

Product = require('../models/product.model');
View = require('../models/view.model');

//For index
exports.index = function (req, res) {
    Product.get(function (err, prod) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "welcome",
           
        });
    });
};
//find data by view
exports.find = function (req, res) {
    let viewName = String(req.params.view_id)
    View.findOne({ _id: viewName }, function (err, prod) {
        if (err)
            res.send(err);
    }).then(function (doc) {
        let name = doc.parent
        let fields = {}
        doc.field.forEach((element, index) => {
            fields[`data.${element}`] = 1
        });

        Product.findOne({ _id: name }, fields, function (err, prod) {
            if (err)
                res.send(err);
            res.json({
                data: prod.data
            });
        })

    })

};
//add view
exports.add = async function (req, res) {
    var view = new View();
    view._id = req.body.name
    view.field = req.body.fields.split(",")
    view.parent = req.body.parent
    await view.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: "New view Added!",
            data: view
        });
    })
}
//get views by data _id
exports.getviews = function (req, res) {
    let dataName = String(req.params.data_id)
    View.find({ parent: dataName },function (err, prod) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            data: prod
        });
    });
};