var express    = require('express')
var bodyParser = require('body-parser')
let mongoose = require('mongoose');
let cors = require('cors')

var app = express()

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
  }));

require('./routers/product.router')(app)

 
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Running FirstRest on Port "+ port);
})


const dbPath = 'mongodb://localhost/product_data?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})