let image = '#';

function makeLine(size){
    let line = "";
    for (let index = 0; index < size; index++) {
        line += image;
    }
    return line;
}

function makeSquare(size){
   /* let square = "";
    for (let index = 0; index < size; index++) {
        square += makeLine(5) +"\n";
    }
    return square;*/
    return makeRectangle(size,size);
}

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }

  function makeDownwardStairs(height){
    let shape = "";
    for (let index = 0; index <= height; index++) {
        shape += makeLine(index)+"\n";
    }
    return shape.slice(0,-1);
  }

  function makeSpaceLine(numSpaces, numChars){
    let spaceLine = "";
    let spaces ="";
    for (let index = 0; index < numSpaces; index++) {
        spaces += " ";
    }
    spaceLine = spaces + makeLine(numChars)+spaces;
    return spaceLine;
  }

  function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }

  function reverse(str) {
    //let lettersArray = str.split('');
    //let reversedLettersArray = lettersArray.reverse();
    return str.split('').reverse().join('');
 }

  console.log(makeSquare(5));
  console.log("\n");
  console.log(makeRectangle(5,3));
  console.log("\n");
  console.log(makeDownwardStairs(5));
  console.log("\n");
  console.log(makeSpaceLine(3,5));
  console.log("\n");
  console.log(makeIsoscelesTriangle(5));
  console.log(reverse(makeIsoscelesTriangle(5)));