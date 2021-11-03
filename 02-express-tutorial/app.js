const express = require('express');
const app = express();

let { people } = require('./data');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/people',(req,res)=>{
    res.status(200).json({data: people, sucess: true});
});

app.post('/api/people', (req, res)=>{
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({sucess:false, msg: 'please provide name value'});
    }
   res.status(201).send({sucess:true, person: name});
});

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
       res.status(200).send(`Welcome ${name}`) ;
    } else {
        res.status(401).send('Wrong credential');
    }
})

app.listen(5000, ()=>{
    console.log("Server is listening");
});