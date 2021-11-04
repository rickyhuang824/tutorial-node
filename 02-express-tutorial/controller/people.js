let { people } = require('../data');

const getPeople = (req, res) =>{
    res.status(200).json({data: people, sucess: true});
}

const createPerson = (req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({sucess:false, msg: 'please provide name value'});
    }
   res.status(201).send({sucess:true, person: name});
}

const createPersonPostman = (req, res) =>{
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({sucess:false, msg: 'please provide name value'});
    }
    res.status(201).send({sucess: true, data:[...people, name]});
};

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
};