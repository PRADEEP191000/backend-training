const { count } = require("console")
const orderModel= require("../models/orderModel")

const createOrder= async function (req, res) {
    let data = req.body
    let freeAppUserData=req.headers['isFreeAppUser']
    freeAppUserData=false;
    if(!freeAppUserData){
        res.send({status: false, data:"the request is missing a mandatory header."})
    }else{
    
    let savedData= await orderModel.create()   //find().populate('user, product')
    res.send({data: savedData})
}
}

module.exports.createOrder= createOrder;
