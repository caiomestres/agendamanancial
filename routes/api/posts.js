const express = require('express');
const router = express.Router();

//@route  GET api/posts/test
//@desc   Test posts route
//@acess  Public

router.get('/test', (req, res) => res.json({ msg: 'Post works' }));

module.exports = router;
