const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
   
    name: {
        type:String,
    },
	balance:{
        type:Number,
        default:100,
    },    
	address:{
        type:String,
    },
	age:{
        type:Number,
    },
    isFreeAppUser: {
        type:Boolean,
        default:false,
    }, 
 	gender: {
        type:String,
        enum:["male","female","other"]
    }   

}, { timestamps: true });






module.exports = mongoose.model('UserDocument', userSchema) //users
// module.exports = mongoose.model('productDocument', productSchema); 
// module.exports = mongoose.model('orderDocument', orderSchema); 



// String, Number
// Boolean, Object/json, array