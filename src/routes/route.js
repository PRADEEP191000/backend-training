 const express = require('express');
 const router = express.Router();
// const myHelper = require('../util/helper')
// const underscore = require('underscore');
// const { append } = require('express/lib/response');
 const app = express();
//  const  mongoose  = require('mongoose');


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


//const bookModel=require("../models/bookModel")
const authorController = require("../controllers/authorController")
const bookController = require("../controllers/bookController");
// router.get("/test-me", function(req, res) {
//     res.send("My first ever api!")
// })


router.get("/getAuthorsData", authorController.getAuthorsData)
router.post("/createAuthor", authorController.createAuthor)
//router.post("/createBook", bookController.createBook)

//router.get("/getBooksData", bookController.getBooksData)


// app.use('/', route);
 

// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

// router.get("/movies/:indexNumber", function(req, res){
//     const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
//     console.log(req.params.indexNumber)
//     let movieIndex = req.params.indexNumber
//     //check index value. less than 0 or greater than array (length - 1) are not valid
//     if(movieIndex<0 || movieIndex>=movies.length) {
//         //if the index is invalid send an error message
//         return res.send('The index value is not correct, Please check the it')
//     }

//     //if the index was valid send the movie at that index in response
//     let requiredMovie = movies[movieIndex]
//     res.send(requiredMovie)
// })

// router.get("/shoes", function(req, res){
//     let queryParams = req.query
//     let brand = queryParams.brand
//     res.send("dummy response")
// })

// // uses query params
// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// // use path param
// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })

// router.get("/films", function(req, res){
//     const films = [ {
//         "id": 1,
//     "name": "The Shining"
//       }, {
//         "id": 2,
//         "name": "Incendies"
//        }, {
//         "id": 3,
//         "name": "Rang de Basanti"
//        }, {
//         "id": 4,
//         "name": "Finding Nemo"
//        }]
//        //send all the films
//       res.send(films) 
// })

// router.get("/films/:filmId", function(req, res){
//     const films = [ {
//         "id": 1,
//         "name": "The Shining"
//        }, {
//         "id": 2,
//         "name": "Incendies"
//        }, {
//         "id": 3,
//         "name": "Rang de Basanti"
//        }, {
//         "id": 4,
//         "name": "Finding Nemo"
//        }]

//        let filmId = req.params.filmId

//        //iterate all the films
//        //search for a film whose id matches with the id recevied in request
//        for(let i = 0; i < films.length; i++){
//            let film = films[i]
//            if(film.id == filmId) {
//                //if there is a match return the response from here
//                return res.send(film)
//            }
//        }

//        //if there is no match give an error response
//        res.send("The film id doesn't match any movie")
// });
// //=====================app.get==sol-1=========================//

// app.get('/sol-1',function(req,res){

      
//     let arr= [1,2,3,5,6,7]
 
//    let total = 0;
//    for (var i in arr) {
//        total += arr[i];
//    }
 
//    let lastDigit= arr.pop()
//    let consecutiveSum= lastDigit * (lastDigit+1) / 2
//    let missingNumber= consecutiveSum - total
 
//    res.send(  { data: missingNumber  }  );
//  });

// //==========================app.get==sol-2==================================//
    
//     app.get('/sol-2', function(req,res){

//         let arr= [33, 34, 35, 37, 38]
//         let len= arr.length
      
//         let total = 0;
//         for (var i in arr) {
//             total += arr[i];
//         }
      
//         let firstDigit= arr[0]
//         let lastDigit= arr.pop()
//         let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
//         let missingNumber= consecutiveSum - total
       
//         res.send(  { data: missingNumber  }  );

//       });
//      //=============================post-api==============================//

     
// let players =
// [
//     {
//         "name": "Jhanvi",
//         "dob": "1/1/1995",
//         "gender": "male",
//         "city": "jalandhar",
//         "sports": [
//             "swimming"
//         ]
//     },
//     {
//         "name": "Ayush Adhikari",
//         "dob": "1/09/1995",
//         "gender": "male",
//         "city": "delhi",
//         "sports": [
//             "soccer"
//         ],
//     },
//     {
//         "name": "Sunil Chhtri",
//         "dob": "1/1/1990",
//         "gender": "male",
//         "city": "mumbai",
//         "sports": [
//             "soccer"
//         ],
//     },
//     {
//         name: 'Sajan Prakash',
//         dob: '14/09/1993',
//         gender: 'male',
//         city: 'Kerala',
//         sports: [ 'swimming' ]
//       },
// ]

// router.post('/players', function (req, res) {

//     //LOGIC WILL COME HERE
//    let newPlayer=req.body
//    let newPlayerName=newPlayer.name
//    let isNameRepeated=false

//    for(let i=0; i<players.length; i++){
//     if (players[i].name==newPlayerName){
//         isNameRepeated=true;
//         break;
//     }
//    }
   
//    if(isNameRepeated){
//     res.send("This players was already exists.")

//    }
//    else{
//     players.push(newPlayer)
//     res.send(players)
//    }
//     res.send(  { data: players , status: true }  )
// })
// //==================================================================================//
// let persons = [

//     {
//         nane: "PK",

//         age: 10, votingStatus: false
//     },

//     {
//         nane: "SK",

//         age: 20,

//         votingStatus: false
//     },

//     {
//         nane: "AA", age: 70,

//         votingStatus: false
//     },

//     {
//         nane: "SC",

//         age: 5, votingStatus: false
//     },

//     {
//         name: "HO",

//         age: 40,

//         votingStatus: false
//     }
// ];
// router.post('/persons',function(req,res){
//     let personCanVote=[];
//     let votingAge = req.query.inputAge;
//     for(let i=0; i<persons.length; i++){
//         let personAge=persons[i].age;
//         if (personAge>votingStatus){
//             persons[i].votingStatus=true;
//         }
//     }
//     personCanVote=persons.filter((person)=>person.age > votingAge);
//     res.send(personCanVote);
// })
    


// //module.exports = app;
 module.exports=router;
// // adding this comment for no reason