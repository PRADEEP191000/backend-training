const printDate=function(){
 let currentDate=new Date();
     currentDate=currentDate.getDate()
     console.log("current date is:",currentDate);
     }
const printMonth=function(){
    let currentMonth=new Date();
    currentMonth=currentMonth.getMonth();
    currentMonth=currentMonth + 1;
    console.log("the current Month is:",currentMonth)
}
const getBatchInfo=function(){
    let text="Plutonium Cohort, W3D3, the topic for today is Nodejs module system"
    console.log(text);
}
module.exports.printDate=printDate;
module.exports.printMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;