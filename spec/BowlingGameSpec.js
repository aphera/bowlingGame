describe("A bowling game", function() {
	
	it("should give a score of zero for rolling a gutter ball", function() {
		var bowlingGame = new BowlingGame();
		bowlingGame.roll(0)
		bowlingGame.roll(0);
		expect(bowlingGame.score()).toEqual(0);
	});
	
	it("should give a score of 2 by knocking down 2 pins", function() {
		var bowlingGame = new BowlingGame();
		bowlingGame.roll(2);
		bowlingGame.roll(0);
		expect(bowlingGame.score()).toEqual(2);
	});
	
	it("should give a score of 5 by knocking down 2 pins then 3", function() {
		var bowlingGame = new BowlingGame();
		bowlingGame.roll(2);
		bowlingGame.roll(3);
		expect(bowlingGame.score()).toEqual(5);
	});

        it("should give a score of 10 by knocking down 4 pins then 3 pins then 2 then 1", function() {
                var bowlingGame = new BowlingGame();
                bowlingGame.roll(4);
                bowlingGame.roll(3);
                bowlingGame.roll(2);
                bowlingGame.roll(1);
                expect(bowlingGame.score()).toEqual(10);
        });

	it("should score a spare on the first frame", function() {
		var bowlingGame = new BowlingGame();
		bowlingGame.roll(5);
		bowlingGame.roll(5);
		bowlingGame.roll(3);
		bowlingGame.roll(0);
		expect(bowlingGame.score()).toEqual(16);
	});

        it("should score a strike on first frame", function() {
                var bowlingGame = new BowlingGame();
                bowlingGame.roll(10);
                bowlingGame.roll(3);
                bowlingGame.roll(6);
                expect(bowlingGame.score()).toEqual(28);
        });

	it("should score two strikes in a row properly", function() {
		var bowlingGame = new BowlingGame();
		bowlingGame.roll(10);
		bowlingGame.roll(10);
		bowlingGame.roll(2);
		bowlingGame.roll(3);
		expect(bowlingGame.score()).toEqual(42);
	});

	it("should score a perfect game", function() {
		var bowlingGame = new BowlingGame();
		bowlingGame.roll(10);
		bowlingGame.roll(10);
		bowlingGame.roll(10);
		bowlingGame.roll(10);
		bowlingGame.roll(10);
		bowlingGame.roll(10);
		bowlingGame.roll(10);
		bowlingGame.roll(10);
		bowlingGame.roll(10);
		bowlingGame.roll(10);
		bowlingGame.roll(10);
		bowlingGame.roll(10);
		expect(bowlingGame.score()).toEqual(300);
	});

        it("should score a near perfect game", function() {
                var bowlingGame = new BowlingGame();
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(0);
                bowlingGame.roll(10);
                expect(bowlingGame.score()).toEqual(280);
        });

	it("should score a game that ends in a spare", function() {
		var bowlingGame = new BowlingGame();
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(10);
                bowlingGame.roll(5);
                bowlingGame.roll(5);
                bowlingGame.roll(4);
		expect(bowlingGame.score()).toEqual(269);
	});


	it("should know that a strike is 10 pins down on the first roll", function() {
		var frame = new BowlingGame().frame(10);
		expect(frame.isStrike()).toEqual(true);
	});

        it("should know that a strike is not 10 pins knocked down over 2 rolls in one frame", function() {
                var frame = new BowlingGame().frame(9);
		frame.setSecondRoll(1);
                expect(frame.isStrike()).toEqual(false);
        });

        it("should know that a spare is 10 pins knocked down over 2 rolls in one frame", function() {
                var frame = new BowlingGame().frame(5);
		frame.setSecondRoll(5);
                expect(frame.isSpare()).toEqual(true);
        });

        it("should know that if I knock down 10 pins in my first roll of a frame it's not a spare", function() {
                var frame = new BowlingGame().frame(10);
                expect(frame.isSpare()).toEqual(false);
        });

        it("should know that if I knock down 9 pins over two rolls for a frame it's not a spare", function() {
                var frame = new BowlingGame().frame(5);
                frame.setSecondRoll(4);
                expect(frame.isSpare()).toEqual(false);
        });

});
