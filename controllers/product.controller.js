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
            status: "success",
            data: { name: prod[0].name, data: prod[0].data }
        });
    });
};
exports.find = function (req, res) {
    let viewName = String(req.params.view_id)
    View.findOne({ _id: viewName }, function (err, prod) {
        if (err)
            res.send(err);
    }).then(function (doc) {
        let name = doc.parent
        let fields = {}
        doc.field.forEach(element => {
            fields[element] = 1
        });

        Product.findOne({ _id: name }, { data: fields }, function (err, prod) {
            if (err)
                res.send(err);
            res.json({
                data: prod.data
            });
        })

    })
    // let name = view.parent
    // let fields = view.field
    // Product.find({_id: name},{data: fields},function (err, prod) {
    //     if (err)
    //         res.send(err);
    //     res.json({
    //         data: prod
    //     });
    // })

};

let findByView = (view, res) => {
    let name = view.parent
    let fields = view.field
    Product.find({ _id: name }, { data: fields }, function (err, prod) {
        res.json({
            data: prod
        });
    })

}