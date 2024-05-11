const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodCabinet = food.split(",").sort();
let equipmentCabinet = equipment.split(",").sort();
let petsCabinet = pets.split(",").sort();
let sleepAidsCabinet = sleepAids.split(",").sort();

let cargoHold = [];

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
cargoHold.push(foodCabinet,equipmentCabinet, petsCabinet, sleepAidsCabinet);
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let cabinetChoice = input.question("Which cabinet do you want to choose?\n 0 - Food Cabinet\n 1 -Equipment Cabinet \n 2 -Pets Cabinet \n 3 - SleepAid Cabinet ");
let item = input.question("What item you want from the cabinet? ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if(Number(cabinetChoice) == 0 ||
Number(cabinetChoice) == 1 ||
Number(cabinetChoice) == 2 ||
Number(cabinetChoice) == 3 ){
    console.log(`The cabinet contains : ${cargoHold[cabinetChoice]}`);
}else {
    console.log("Sorry Invalid input!!");
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

if(Number(cabinetChoice) == 0||
Number(cabinetChoice) == 1 ||
Number(cabinetChoice) == 2 ||
Number(cabinetChoice) == 3){
    if(cargoHold[cabinetChoice].includes(item)){
        console.log(`The Cabinet ${cabinetChoice} contains the item ${item}`);
    }
    else{
        console.log(`Cabinet ${cabinetChoice} DOES/DOES NOT contain ${item}.`);
    }
}