
// const middleware=require("../middleware/auth");

// const express = require('express');

// const router = express.Router();

// const userController= require("../controllers/userController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/users", userController.createUser  )

// router.post("/loginUser", userController.loginUser)

// //The userId is sent by front end
// router.get("/getUsers/:userId", middleware.tokenVerify, userController.getUserData)

// router.put("/users/:userId", middleware.tokenVerify, userController.updateUser);
// router.put("/deleteUser/:userId", middleware.tokenVerify, userController.deleteUser);

// module.exports = router;

//===========================================mamSolution==========================================//
const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUsers", userController.createUser  )

router.post("/loginUser", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", auth.validateToken, userController.getUserData)

router.put("/updateUsers/:userId", auth.validateToken, userController.updateUser)

router.delete("/deleteUsers/:userId", auth.validateToken, userController.deleteUser)

module.exports = router;