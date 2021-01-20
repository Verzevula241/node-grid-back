var mongoose = require('mongoose');
//schema
mongoose.set('useFindAndModify', false);
var productSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    data: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    default_view: {
        type: String
    }
    
});


var Item = module.exports = mongoose.model('prod', productSchema,'product');
module.exports.get = function (callback, limit) {
   Item.find(callback).limit(limit); 
}