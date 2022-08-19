const authorModel=require("../models/authorModel");
const bookModel = require("../models/bookModel");

const authors= async function (req, res) {
    let data= req.body

    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
};

const createAuthor= async function(req,res){
  let data=req.body;
  let _id=data.authorId;
  if(!_id){
    return res.send({status:false, msg:"author id must be present."});
}
let savedData=await authorModel.create(data)
res.send({msg:savedData})

    
};

const listBooks=async function(req,res){
    let findauthor = await authorModel.find({authorName: "Chetan Bhagat"});
    let findbook = await bookModel.find({authorId:{$eq: findauthor[0].authorId}});
    res.send({msg:findbook});

};
const updateBooks =async function(req,res){
    let bookprice=await bookModel.findOneAndUpdate({bookName: "Two states"}, {$set : {price:100}},{new:true});
    let updateprice= bookprice.price;
    let authorupdate=await authorModel.find({authorId:{$eq: bookprice.authorId}}).select({authorName:1 ,_id:0});
    res.send({authorupdate, updateprice})
};
const bookrange=async function(req,res){
    let range = await bookModel.find({price: {$gte:50,$lte:100}});
    let a = range.map(x=>x.authorId);
    let newrange=await authorModel.find({authorId:a}).select({authorName:1,_id:0});
    res.send(newrange);
}


module.exports.updateBooks=updateBooks;
module.exports.bookrange=bookrange;
module.exports.listBooks=listBooks;
module.exports.authors=authors;
module.exports.createAuthor=createAuthor;