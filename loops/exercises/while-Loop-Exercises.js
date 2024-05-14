const input = require('readline-sync');
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let fuelLevel ;
let noOfastronaut;
let altitude;
let aptFuelLevel = false;
let aptNoofAtronauts = false;
/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  while(!aptFuelLevel){
    fuelLevel = Number(input.question("Enter a fuel level..(Between 5000 - 30000) "));
    if (fuelLevel > 5000 && fuelLevel < 30000){
      aptFuelLevel = true;
      break;
    }
    }



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  
while(!aptNoofAtronauts){
  noOfastronaut = Number(input.question("Enter the number of Astranauts(0-7): "));
  if(noOfastronaut>0 && noOfastronaut <=7){
    aptNoofAtronauts = true;
    break;
  }
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
altitude =0;
let minRequiredFuel = noOfastronaut*50;
while(fuelLevel > minRequiredFuel){
  altitude = altitude + 50;
  fuelLevel = fuelLevel - 100;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${altitude} km.`);

if(altitude >=2000){
  console.log("Orbit Achieved!");
}else{
  console.log("Failed to reach orbit.");
}