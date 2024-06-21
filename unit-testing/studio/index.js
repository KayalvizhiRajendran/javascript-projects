
let codes = {
    '2' : "Launch",
    '3' : "Code",
    '5' : "Rocks",
    others : "Rutabagas! That doesn't work."
};

function launchOutput (num){
    let str = "";
    if(num % 2 === 0){
        str += codes['2'];
    }
    if (num % 3 === 0){
        str += codes['3'];
    }
    if (num % 5 === 0){
        str += " "+codes['5'];
    }

    if(str === ""){
        return codes['others'];
    }else {
        return str.trim()+"!";
    }
}

let launchcode = {
  organization : "nonprofit",
  executiveDirector : "Jeff",
  percentageCoolEmployees : 100,
  programsOffered : ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput : launchOutput
 /* launchOutput : function(num){
    let str = "";
    if(num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
        str = 'LaunchCode Rocks!';
    }else if(num % 2 === 0 && num % 3 === 0){
        str = 'LaunchCode!';
    }else if(num % 3 === 0 && num % 5 === 0){
        str ='Code Rocks!';
    }else if(num % 2 === 0 && num % 5 === 0){
        str ='Launch Rocks! (CRASH!!!!)';
    }else if(num % 2 === 0){
        str = "Launch!";
    }else if( num % 3 === 0){
        str ='Code!';
    }else if (num % 5 === 0){
        str ='Rocks!';
    }else{
        str = "Rutabagas! That doesn't work.";
    }
    return str;
  }*/
}

module.exports = launchcode;

