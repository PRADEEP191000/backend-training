const express = require('express');

const intro=require('./intro.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log("My batch name is",intro.name);
    res.send('My second ever api!')
});

router.get('/test-you',function(req,res){
    res.send('My  first route implementatin ever api!')
})

module.exports = router;
// adding this comment for no reason