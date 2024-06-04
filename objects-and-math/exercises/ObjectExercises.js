let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID:1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID:2,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 	6,
   astronautID:3,
   move: function () {return Math.floor(Math.random()*11)}
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 	5,
   astronautID:4,
   move: function () {return Math.floor(Math.random()*11)}
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 	1,
   astronautID:5,
   move: function () {return Math.floor(Math.random()*11)}
};


// After you have created the other object literals, add the astronautID property to each one.
/*function randomID(){
   let index = Math.floor(Math.random()*10);
   return index;
 }

 let objArray = [superChimpOne,superChimpTwo,salamander,beagle, tardigrade];
 let randomIDs = [];
for(items in objArray){
   objArray[items].astronautID = randomID();
   while(randomIDs.includes(objArray[items].astronautID)){
      objArray[items].astronautID = randomID();
   }
   randomIDs.push(objArray[items].astronautID);

   console.log(objArray[items]);
}*/

// Add a move method to each animal object

// Create an array to hold the animal objects.
let crew = [superChimpOne,superChimpTwo,salamander,beagle, tardigrade];
// Print out the relevant information about each animal.
function crewReports(arr){
for(item in arr){
   console.log(`${arr[item].name} is a ${arr[item].species}. They are ${arr[item].age} years old and ${arr[item].mass} kilograms. Their ID is ${arr[item].astronautID}.`);
}
}

crewReports(crew);
// Start an animal race!

function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }

 console.log( fitnessTest(crew));
 console.log(Math.floor(-3.87) );
