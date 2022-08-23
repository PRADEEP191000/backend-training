const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    bookName: String,
    author:String,
    author_id: {
        type: ObjectId,
        ref: "newAuthor"
        
    },
    publisher_id:{
        type:ObjectId,
        ref:"newPublisher"
    }, 
    price: Number,
    rating: Number,
    publisher:String


}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
