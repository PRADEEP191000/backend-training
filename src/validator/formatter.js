
const func1=function(){
let text="          Hello FunctionUp     ";
let result=text.trim();
 console.log(result);
}
const changetoLowerCase=function(){
    let clc="CHANGE THE CASE OF THE STRING TO LOWER."
    let res1=clc.toLowerCase();
    console.log(res1);
}
const changetoUperCase=function(){
    let cuc="changes the case of the string to upper case";
    let res2=cuc.toUpperCase();
    console.log(res2);
}
module.exports.func1=func1;
module.exports.changetoLowerCase=changetoLowerCase;
module.exports.changetoUperCase=changetoUperCase;