let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);

let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);

myStr = 'Index';
console.log(myStr[2] === 'n');
console.log(myStr[4] === 'x');
console.log(myStr[6] === ' ');
console.log(myStr[0] === 'I');

phrase = 'Code for fun';
console.log(phrase[2]);

cityName = "Vienna";
stateName = "Virginia";
location = cityName + ", " +  stateName;

console.log(location.length);

let pet = 'cat';
console.log(pet +"s");
pet += "s";
console.log(pet);

let language = "JavaScript";
console.log(language.replace('J', 'Q'));
console.log(language.slice(0,5));
console.log(language);

console.log( language.slice(1,6));

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);