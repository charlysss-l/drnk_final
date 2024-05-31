const express = require('express');
const adminRoutes = require('./routes/admin'); // adjust the path to match your project structure
const shopRoutes = require('./routes/shop'); // adjust the path to match your project structure
const bodyParser = require('body-parser');
const path = require('path');

//create express app
const app = express();

app.set('view engine', 'ejs');



const port = process.env.PORT || 3000;
app.set('port', port);

//parse incoming request
app.use(bodyParser.urlencoded({ extended: true }));
//http://localhost:3000/abc/main.css

//app.use((req, res, next) => {
//  console.log('This is always being executed!');
//  next();
//});
app.use(express.static('public'));

//routes handle user request
app.use('/admin', adminRoutes);
app.use(shopRoutes);


//error handling middleware
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
});
app.listen(app.get('port'), () => {
    console.log('Server is running on port 3000');
});