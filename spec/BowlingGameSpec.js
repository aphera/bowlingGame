describe("A bowling game", function() {
	
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

        it("Rolling a strike on first frame scores properly", function() {
                var bowlingGame = new BowlingGame();
                bowlingGame.roll(10);
                bowlingGame.roll(3);
                bowlingGame.roll(6);
                expect(bowlingGame.score()).toEqual(28);
        });

	it("Scores two strikes in a row properly", function() {
		var bowlingGame = new BowlingGame();
		bowlingGame.roll(10);
		bowlingGame.roll(10);
		bowlingGame.roll(2);
		bowlingGame.roll(3);
		expect(bowlingGame.score()).toEqual(42);
	});

	it("Scores a perfect game", function() {
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

        it("Scores a near perfect game", function() {
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

	it("Scores a game that ends in a spare", function() {
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


	it("If I knock down 10 pins on my first roll for a frame it's a strike", function() {
		var frame = new Frame(10);
		expect(frame.isStrike()).toEqual(true);
	});

        it("If I knock down 9 pins on my first roll for a frame it's not a strike", function() {
                var frame = new Frame(9);
		frame.secondRoll = 1;
                expect(frame.isStrike()).toEqual(false);
        });

        it("If I knock down 10 pins over two rolls for a frame it's a spare", function() {
                var frame = new Frame(5);
		frame.secondRoll = 5;
		console.log(frame);
                expect(frame.isSpare()).toEqual(true);
        });

        it("If I knock down 10 pins in my first roll of a frame it's not a spare", function() {
                var frame = new Frame(10);
                expect(frame.isSpare()).toEqual(false);
        });

        it("If I knock down 9 pins over two rolls for a frame it's not a spare", function() {
                var frame = new Frame(5);
                frame.secondRoll = 4;
                expect(frame.isSpare()).toEqual(false);
        });

});
