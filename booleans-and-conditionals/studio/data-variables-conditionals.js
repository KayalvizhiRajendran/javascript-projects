// Initialize Variables below
const date = 'Monday 2019-03-18';
const time = "10:05:34 AM";
const astronautCount = 7;
const astronautStatus = 'ready';
const averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maxMassLimit = 850000;
const fuelTempCelcius = -225;
const minFuelTemp = -300;
const maxFuelTemp = -150;
const fuelLevel = '100%';
const weatherStatus = 'clear';
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if(astronautCount <= 7 && astronautStatus === 'ready' && totalMassKg < maxMassLimit &&
 (fuelTempCelcius >= minFuelTemp && fuelTempCelcius <= maxFuelTemp) && fuelLevel ==='100%' && weatherStatus === 'clear' ){

    preparedForLiftOff = true;
}else{
    preparedForLiftOff = false;
}

if (preparedForLiftOff){
    console.log("All Systems are go! Initiating Space Shuttle Launch Sequence.");
    console.log("-------------------------------------------------------------");
    console.log("Date: ", date);
    console.log("Time: ",time);
    console.log("Astronaut count: ", astronautCount);
    console.log("Crew Mass: ", crewMassKg);
    console.log("Fuel Mass:", fuelMassKg);
    console.log("Shuttle Mass : ", shuttleMassKg);
    console.log("Total Mass: ", totalMassKg);
    console.log("Fuel Temperature: ", fuelTempCelcius);
    console.log("Weather Status: ", weatherStatus);
    console.log("--------------------------------------------------------------");
    console.log("Have a safe trip Astronauts - Geeta, Kayal, Teyah, Jada!");
}
// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
