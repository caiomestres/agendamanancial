const express = require('express');
const router = express.Router();

//@route  GET api/users/test
//@desc   Test user route
//@acess  Public

router.get('/test', (req, res) => res.json({ msg: 'User works' }));

module.exports = router;
