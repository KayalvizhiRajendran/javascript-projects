/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

for (let index = 0; index < 21; index++) {
  console.log(index);
}

for (let index = 3; index < 30; index = index+2) {
  console.log(index);
}

for (let index = 12; index > -15; index--) {
  console.log(index);
}

for (let index = 50 ; index > 19; index--) {
  
  if(index % 3 == 0){
    console.log(index);
  }
}
/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
let name = "LaunchCode";
let array = [1,5,'LC101','blue',42];
let reversed = "";

for (let index = 0; index < array.length; index++) {
  console.log( array[index]);
}

for (let i = 0; i < name.length; i++) {
  reversed = name[i] + reversed;
}

console.log(reversed);


/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
  let otherArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evens = [], odds = [];

for (let index = 0; index < otherArr.length; index++) {
  const element = Number(otherArr[index]);
  console.log(element);
  if(element % 2 == 0){
    evens.push(element);
  }else{
    odds.push(element);
  }
  
}
console.log(evens);
console.log(odds);