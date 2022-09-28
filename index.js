function sum(a,...b){
    console.log("arguments",arguments[1])
    if(arguments.length>0){
        let count=0
        for(let i=0;i<arguments.length;i++){
          count=count+arguments[i]
        }
        return count
    }
   
}
function substract(a,b){
    console.log(arguments.length)
    
   return a-b
    
}
function  convertTimetoString(num) {
    var sec_num = parseInt(num, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = hours;}
    if (minutes < 10) {minutes = minutes;}
    if (seconds < 10) {seconds = seconds;}
    return hours+' '+"hours"+' '+minutes+' '+"minutes"+' '+seconds+' '+"seconds";
}
module.exports={sum,substract,convertTimetoString}