//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());

let codes = [76, 97, 117, 110, 99, 104, 67, 111, 100, 101];

let characters = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1])
                + String.fromCharCode(codes[2]) + String.fromCharCode(codes[3])
                + String.fromCharCode(codes[4]) + String.fromCharCode(codes[5])
                + String.fromCharCode(codes[6]) + String.fromCharCode(codes[7])
                + String.fromCharCode(codes[8]) + String.fromCharCode(codes[9]);

console.log(characters);

console.log('Launch\nCode');
console.log('Launch/nCode');
console.log('Launch', 'Code');
console.log('Launch\tCode');
console.log('Launch/tCode');

let pluralNoun = "structures";
let name = "Tom";
let verb = "code";
let adjective = "beautiful";
let color = "red";

console.log(`JavaScript provides a ${color} collection of tools — including ${adjective}  syntax and ${pluralNoun} — that allows ${name} to ${verb} with strings.`);
name = "Jack";
let currentAge = 9;

console.log(`Next year, ${name} will be ${currentAge + 1}.`);
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?


//Experiment with other combinations (chains) of string methods.
