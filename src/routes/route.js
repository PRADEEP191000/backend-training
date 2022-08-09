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

      //============Problem - 4 2nd step===============//

       const arrOdd= [1,3,5,7,9,11,13,15,17,19];
       let odds=lodash.tail(arrOdd)
     
      console.log(odds);

    

      
    res.send('Welcome to my assignment.')
})

//=======================================================================//

router.get('/test-you',function(req,res){
    res.send('My  first route implementatin ever api!')
});
const abc = require('../introduction/intro')
// const router = express.Router();

router.get('/students', function (req, res) {
    let students=["Pradeep Gupta","FAPT","Angad"]

    res.send(students)
});

//========================================================================//

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


//=====================assignment/get-api==Problem-1===============// 

router.get('/movies', function(req,res){
  let movies=['Rang de basanti', "Sanam teri kasam", "Bahubali", "commondo"];
  console.log(movies)
  res.send(movies)

});

//===================get-api===Problem-2/3=======================//

router.get('/movies/:indexNumber',function(req,res){

  let movies=['Rang de basanti', "The shining","Batman begines", "Sanam teri kasam", "Bahubali", "commondo"];
  let indexOfMovies=req.params.indexNumber;
  if (indexOfMovies < 0 || indexOfMovies > movies.length){
    res.send("Please insert valid index");
  }else{
    res.send(movies[indexOfMovies])
  }

});

//====================get-api===Problem-4=======================//

router.get('/films', function(req,res){

  let movieArr=[ {
    'id': 1,
    'name': 'The Shining'
   }, {
    'id': 2,
    'name': 'Incendies'
   }, {
    'id': 3,
    'name': 'Rang de Basanti'
   }, {
    'id': 4,
    'name': 'Finding Nemo'
   },{
    "id":5,
    "name":"commondo"
   },{
    "id": 6,
   "name": "sanam teri kasam"
   }];

   res.send(movieArr);

  });

  //==========================get-api===Problem-5======================//

router.get('/films/:filmId',function(req,res){

  let movieArr=[ {
    'id': 1,
    'name': 'The Shining'
   }, {
    'id': 2,
    'name': 'Incendies'
   }, {
    'id': 3,
    'name': 'Rang de Basanti'
   }, {
    'id': 4,
    'name': 'Finding Nemo'
   },{
    "id":5,
    "name":"commondo"
   },{
    "id": 6,
   "name": "sanam teri kasam"
   }];

   let filmId=req.params.filmId;
  for (let i=0; i<= movieArr.length; i++){
    if (movieArr.id==filmId){
      return res.send(movieArr[i])
    }
  }
  res.send("Invalid movies id")

})




module.exports = router;
// adding this comment for no reason
