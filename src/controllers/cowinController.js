let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};
//====================================ASSIGNMENT 1ST Question=========================//
let getDistrictSessions=async function(req, res){
    try{
        let district = req.query.districtId
        let date = req.query.date;
        let options={
            method:"get",
            url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }

        let result = await axios(options);
        console.log(result.data)
        res.status(200).send({msg:result.data})
        
    }
    catch (err){
        console.log(err)
        res.status(500).send({msg:err.message})

    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
//===========================assignment 2nd question===========================//
let getSortedCities= async function(req, res){
    try{
        let cities=["Bengaluru", "Mumbai","Delhi","Kolkata","Chennai","Londan","Moscow"]
        let cityObjArray=[]
        for (let i=0; i<cities.length; i++){
            let obj={city: cities[i]}
            let resp=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=753c6aad5a44d60f07114cc1c33ca4f4`)
            console.log(resp.data.main.temp)
            obj.temp=resp.data.main.temp
            cityObjArray.push(obj)
            let sorted=cityObjArray.sort( function(a,b){
                return a.temp - b.temp
            })
            console.log(sorted)
            res.status(200).send({status: true, data: sorted})
            
        }

    }
    catch(err){
        console.log(err)
        res.status(500).send({status:false, msg:"server error"})
    }
}
//=============================3rd Question of assignment=====================//

let memhandler=async function(req, res){
    try{
        const text0 = req.query.text0
        const text1 = req.query.text1
        const userName = req.query.userName
        const password = req.query.password
        const tempId = req.query.tempId
        console.log(text0,text1,userName,password,tempId)

        let options={
            method:"post",
            url:`https://api.imgflip.com/caption_image?text0=${text0}&text1=${text1}&userName=${userName}&password=${password}&tempId=${tempId}`
        }
        let result=await axios(options)
        res.send({data: result.data})

    }
    catch(err){
        console.log(err)
        res.status(500).send({status:false, msg:"server error"})
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistrictSessions=getDistrictSessions;
module.exports.getSortedCities=getSortedCities;
module.exports.memhandler=memhandler;