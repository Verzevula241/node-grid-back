var mongoose = require('mongoose');
//schema
mongoose.set('useFindAndModify', false);
var viewSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    field: {
        type: Array,
        required: true
    },
    parent: {
        type: String,
        required: true
    }
    
});


var Item = module.exports = mongoose.model('view', viewSchema,'views');
module.exports.get = function (callback, limit) {
   Item.find(callback).limit(limit); 
}