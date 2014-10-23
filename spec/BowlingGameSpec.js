describe("Scores a bowling game", function() {
	
	it("Rolling a gutter ball return a score of zero", function() {
		var bowlingGame = new BowlingGame();
		bowlingGame.roll(0)
		bowlingGame.roll(0);
		expect(bowlingGame.score()).toEqual(0);
	});
	
	it("Rolling a two pins down returns a score of two", function() {
		var bowlingGame = new BowlingGame();
		bowlingGame.roll(2);
		bowlingGame.roll(0);
		expect(bowlingGame.score()).toEqual(2);
	});
	
	it("Rolling 2 pins then 3 returns 5", function() {
		var bowlingGame = new BowlingGame();
		bowlingGame.roll(2);
		bowlingGame.roll(3);
		expect(bowlingGame.score()).toEqual(5);
	});

        it("Rolling 4 pins then 3 pins then 2 then 1 returns 10", function() {
                var bowlingGame = new BowlingGame();
                bowlingGame.roll(4);
                bowlingGame.roll(3);
                bowlingGame.roll(2);
                bowlingGame.roll(1);
                expect(bowlingGame.score()).toEqual(10);
        });

	it("Rolling a spare on first frame scores properly", function() {
		var bowlingGame = new BowlingGame();
		bowlingGame.roll(5);
		bowlingGame.roll(5);
		bowlingGame.roll(3);
		bowlingGame.roll(0);
		expect(bowlingGame.score()).toEqual(16);
	});
});
