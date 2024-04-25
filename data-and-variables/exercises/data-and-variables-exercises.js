// Declare and assign the variables below
let spaceShuttleName = 'Determination';
let spaceShuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
let milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(spaceShuttleName));
console.log(typeof(spaceShuttleSpeed));
console.log(typeof(distanceToMars));
console.log(typeof(distanceToMoon));
console.log(typeof(milesPerKm));
// Calculate a space mission below
let milesToMars = distanceToMars * milesPerKm;
let hoursToMars = milesToMars/spaceShuttleSpeed;
let daysToMars = hoursToMars /24;

// Print the results of the space mission calculations below
console.log("%s will take %f days to reach Mars.",spaceShuttleName, daysToMars);
// Calculate a trip to the moon below
let milesToMoon = distanceToMoon * milesPerKm;
let hoursToMoon = milesToMoon/spaceShuttleSpeed;
let daysToMoon = hoursToMoon /24;

// Print the results of the trip to the moon below
console.log("%s will take %f days to reach Moon.",spaceShuttleName, daysToMoon);