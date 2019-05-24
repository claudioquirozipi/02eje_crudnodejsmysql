const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//import 
const customerRouter = require('./routes/customer');
//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'crudnodejsmysql'
}, 'single'))
app.use(express.urlencoded({extended: false}))

//Routes
app.use('/', customerRouter)

//Static files 
app.use(express.static(path.join(__dirname, 'public')))

//Starting server
app.listen(app.get('port'), () => {
    console.log("server on port ", app.get('port'));
})