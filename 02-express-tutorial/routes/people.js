const express = require('express');
const data = require('../data');
const app = express();
const router = express.Router();

let { people } = data;

router.get('/',(req,res)=>{
    res.status(200).json({data: people, sucess: true});
});

router.post('/', (req, res)=>{
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({sucess:false, msg: 'please provide name value'});
    }
   res.status(201).send({sucess:true, person: name});
});

router.post('/postman', (req,res)=>{
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({sucess:false, msg: 'please provide name value'});
    }
    res.status(201).send({sucess: true, data:[...people, name]});
});

module.exports = router;