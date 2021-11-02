const express = require('express');
const app = express();
const data = require('./data');

app.get('/', (req, res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
})

app.get('/api/products', (req, res)=>{
    const newProducts = data.products.map((product)=>{
        const {id, name, image} = product;
        return {id, name, image};
    })

    res.json(newProducts);
})

app.get("/api/products/:productID", (req, res)=>{
    console.log(req.params);
    const {productID} = req.params;
    const singleProduct = data.products.find((product)=>{
        return product.id === Number(productID);
    })

    if (!singleProduct){
        return res.status(404).send('Product does not exist');
    }
    return res.json(singleProduct);
})

app.get('/api/v1/query', (req, res)=>{
    const { search, limit } = req.query;
    let sortedProducts = [...data.products];

    if (search) {
       sortedProducts = sortedProducts.filter((product)=>{
           return product.name.startsWith(search);
       }) 
    }

    if (limit) {
       sortedProducts = sortedProducts.slice(0, Number(limit)) ;
    }

    if (sortedProducts.length < 1) {
       return res.status(200).json({sucess: true, data: sortedProducts});
    }

    return res.status(200).json(sortedProducts);
    // res.send('hello world');
})

app.listen(5000, ()=>{
    console.log("Server is listening");
});