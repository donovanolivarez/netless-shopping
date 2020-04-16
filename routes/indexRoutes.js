const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('../views/index');
});

router.get('/categories', (req,res) => {
    res.send('stuff on the categories page.')
})

module.exports = router;