const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger');
const authorize = require('./authorize');

// app.use([logger, authorize]);
// app.use(express.static('./public'));
// req => middleware => res
app.use(morgan('tiny'));
app.get('/', (req, res)=>{
    res.send('Home');
})

app.get('/about', (req, res)=>{
    res.send('About');
});

app.get('/api/products', (req, res)=>{
    // console.log(req.user);
    res.send('Products');
})

app.get('/api/items', (req, res)=>{
    res.send('Items');
});

app.listen(5000, ()=>{
    console.log("Server is listening");
});