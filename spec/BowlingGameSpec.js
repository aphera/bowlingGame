describe("Scores a bowling game", function() {
	
	it("Rolling a gutter ball return a score of zero", function() {
		var bowlingGame = new BowlingGame();
		bowlingGame.roll(0);
		expect(bowlingGame.score()).toEqual(0);
	});
	
	it("Rolling a two pins down returns a score of two", function() {
		var bowlingGame = new BowlingGame();
		bowlingGame.roll(2);
		expect(bowlingGame.score()).toEqual(2);
	});
	
	it("Rolling 2 pins then three returns 5", function() {
		var bowlingGame = new BowlingGame();
                bowlingGame.roll(2);
                bowlingGame.roll(3);
                expect(bowlingGame.score()).toEqual(5);
	});
});
