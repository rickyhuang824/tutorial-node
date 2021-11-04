const express = require('express');
const router = express.Router();
const {
    getPeople,
    createPerson,
    createPersonPostman
} = require('../controller/people');


router.get('/', getPeople);
router.post('/', createPerson);
router.post('/postman', createPersonPostman);

module.exports = router;