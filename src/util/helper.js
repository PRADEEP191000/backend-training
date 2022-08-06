const printDate=function(){
 const d=new Date();
     console.log(d);
     }
const printMonth=function(){
    const m=new Date(2022,8);
    console.log(m)
}
const getBatchInfo=function(){
    let text="Plutonium Cohort, W3D3, the topic for today is Nodejs module system"
    console.log(text);
}
module.exports.printDate=printDate;
module.exports.printMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;