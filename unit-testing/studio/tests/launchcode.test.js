// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("Check Organization", function(){
        let result = launchcode.organization;
        expect(result).toBe("nonprofit");
  });

  test("Check executiveDirector", function(){
    let result = launchcode.executiveDirector;
    expect(result).toBe("Jeff");
  });

  test("Check percentageCoolEmployees", function(){
    let result = launchcode.percentageCoolEmployees;
    expect(result).toBe(100);
  });

  test("Check programsOffered", function(){
    let result = launchcode.programsOffered;
    expect(result[0]).toBe("Web Development");
  });

  test("Check programsOffered", function(){
    let result = launchcode.programsOffered;
    expect(result[1]).toBe("Data Analysis");
  });

  test("Check programsOffered", function(){
    let result = launchcode.programsOffered;
    expect(result[2]).toBe("Liftoff");
  });

  test("Check programsOffered length", function(){
    let result = launchcode.programsOffered;
    expect(result.length).toBe(3);
  });

  test("Check launchOutput divisible by 2", function(){
    let result = launchcode.launchOutput(4);
    expect(result).toBe("Launch!");
  });

  test("Check launchOutput divisible by 3", function(){
    let result = launchcode.launchOutput(9);
    expect(result).toBe("Code!");
  });

  test("Check launchOutput divisible by 5", function(){
    let result = launchcode.launchOutput(5);
    expect(result).toBe("Rocks!");
  });

  test("Check launchOutput divisible by 2 & 3", function(){
    let result = launchcode.launchOutput(6);
    expect(result).toBe("LaunchCode!");
  });

  test("Check launchOutput divisible by 2 & 5", function(){
    let result = launchcode.launchOutput(10);
    expect(result).toBe("Launch Rocks!");
  });

  test("Check launchOutput divisible by 3 & 5", function(){
    let result = launchcode.launchOutput(15);
    expect(result).toBe("Code Rocks!");
  });

  test("Check launchOutput divisible by 2, 3 & 5", function(){
    let result = launchcode.launchOutput(30);
    expect(result).toBe("LaunchCode Rocks!");
  });

  test("Check launchOutput NOT divisible by 2, 3 & 5", function(){
    let result = launchcode.launchOutput(7);
    expect(result).toBe("Rutabagas! That doesn't work.");
  });
  
});