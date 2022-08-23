const { default: mongoose } = require("mongoose");
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let author1=book.author1;
    let publisher1=book.publisher1;
    let isAuthorValid=mongoose.Types.ObjectId.isValid(author1);
    let isPublisherValid=mongoose.Types.ObjectId.isValid(publisher1);
    if (isAuthorValid === false){
        return res.send("AuthorId length is invalid please check carefully.");
    }else if(isPublisherValid === false){
        return res.send("publisherId length is invalid")

    };
    let idFromAuthor = await authorModel.findById(author1);
    let idFromPublisher = await publisherModel.findById(publisher1);

    if (!idFromAuthor) {
        return res.send("this author is not present.")
    } else if (!idFromPublisher) {
        return res.send("this publisher is not present.")
    } else if (!idFromAuthor && !idFromPublisher) {
        return res.send("author and publisher both id's are invalid , please try with valid id ")
    }
      let bookCreated = await bookModel.create(book)
    
     res.send({data: bookCreated})
    
};

const getBooksData= async function (req, res) {

    let books = await bookModel.find().populate('author_id').populate('publisher_id');

    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {

    let data =   await publisherModel.find({name : ["Penguin","HarperCollins"]}).select({_id : 1})
    let bookid = await bookModel.updateMany({ publisher : data },{ $set : {isHardCover : true , new : true }},{upsert : true})

    let authorIds = await authorModel.find( { ratings : { $gt : 3.5 }}).select({_id : 1})
    let rating1 = await bookModel.updateMany({author : authorIds }, { $inc : {price :10 }},{upsert : true})
 
    res.send({ data: bookid , rating1})
  
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
