const express = require('express');
const underscore=require('underscore');
const lodash = require('lodash');

const router = express.Router();
const intro=require('./intro.js')
const formatter=require('../validator/formatter')
const logger=require('../loggers/logger.js');
const helper=require('../util/helper');
router.get('/test-me',function(req,res){
    helper.printDate();
    helper.printMonth();
    helper.getBatchInfo();
    logger.welcome();
    formatter.func1();
    formatter.changetoLowerCase();
    formatter.changetoUperCase();
    console.log("My batch name is",intro.name);

     let array=["January", "february","march","april","may","june","july","august","september","october","november","december"]
    function chunk(array, size) {
        let result = []
        for (let i = 0; i < array.length; i += size) {
          let chunk = array.slice(i, i + size)
          result.push(chunk)
        }
        return result
      }let months = chunk(array, 3);
      console.log(months);

      //Problem - 4 2nd step===============

       const arrOdd= [1,3,5,7,9,11,13,15,17,19];
       let odds=lodash.tail(arrOdd)
     
      console.log(odds);

      //Problem- 4 3rd step======================
      const arr1=[1,2,]
      const arr2=[1,2,3,4]
      const arr3=[1,2,3,4,5,6]
      const arr4=[1,2,3,4,5,6,7,8]
      const arr5=[1,2,3,4,5,6,7,8,9,10]
      let arrUnion=lodash.union(arr1,arr2,arr3,arr4,arr5);
      console.log(arrUnion);

      //Problem - 4 last step=========

      let arrObject=[ ['firstName','Pradeep'],["lastName","Gupta"],["emailID","pradeepgupta191000@gmail.com"]]
      let frPairs=lodash.fromPairs(arrObject);
      console.log(frPairs)



    

      
    res.send('Welcome to my assignment.')
})



router.get('/test-you',function(req,res){
    res.send('My  first route implementatin ever api!')
});
const abc = require('../introduction/intro')
// const router = express.Router();

router.get('/students', function (req, res) {
    let students=["Pradeep Gupta","FAPT","Angad"]

    res.send(students)
});


router.get('/student-details/:name', function(req, res){
    console.log("this is the request "+JSON.stringify(req.params));
    let reqParams= req.params
    let studentName =reqParams.name
    console.log('Name of the student is',studentName)
    let studentDetails=studentName + ' ' +studentName


    res.send(studentDetails)
})

router.get('/give-me-students-data',function(req, res){

});

module.exports = router;
// adding this comment for no reason
