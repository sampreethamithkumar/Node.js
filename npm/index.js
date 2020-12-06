// var _ = require('underscore');

// var result = _.contains([1,2,3],2);

// console.log(result);


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});