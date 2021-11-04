const express = require('express');
const router = express.Router();
const {
    getPeople,
    createPerson,
    createPersonPostman
} = require('../controller/people');


// router.get('/', getPeople);
// router.post('/', createPerson);
// router.post('/postman', createPersonPostman);

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);

module.exports = router;