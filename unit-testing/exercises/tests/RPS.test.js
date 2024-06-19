const rps = require('../RPS.js');

describe("RPS test suite", function(){

    test("Both player chooses same", function() {
       let results = rps.whoWon("rock","rock");
       expect(results).toBe("TIE!");
      });

      
    test("Player 2 wins!", function() {
        let results = rps.whoWon("rock","paper");
        expect(results).toBe("Player 2 wins!");
       });

       test("Player 2 wins!", function() {
        let results = rps.whoWon("paper","scissors");
        expect(results).toBe("Player 2 wins!");
       });
    
       test("Player 2 wins!", function() {
        let results = rps.whoWon("scissors","rock");
        expect(results).toBe("Player 2 wins!");
       });

       test("Player 1 wins!", function() {
        let results = rps.whoWon("rock","scissors");
        expect(results).toBe("Player 1 wins!");
       });

       test("Player 1 wins!", function() {
        let results = rps.whoWon("scissors","paper");
        expect(results).toBe("Player 1 wins!");
       });

       test("Player 1 wins!", function() {
        let results = rps.whoWon("paper","rock");
        expect(results).toBe("Player 1 wins!");
       });

       test("Invalud Input", function() {
        let results = rps.whoWon("test","rock");
        expect(results).toBe("Invalid input");
       });

       test("Invalud Input", function() {
        let results = rps.whoWon("paper","sand");
        expect(results).toBe("Invalid input");
       });
});