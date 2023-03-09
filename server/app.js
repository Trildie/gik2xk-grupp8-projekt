var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/users", require("./routes/usersRoute"));
app.use('/products', require('./routes/productsRoute'));
app.use("/carts", require("./routes/cartsRoute"));
 


module.exports = app;
