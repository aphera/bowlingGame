describe("Scores a bowling game", function() {
	
	it("Rolling a gutter ball return a score of zero", function() {
		var bowlingGame = new BowlingGame();
		bowlingGame.roll(0);
		expect(bowlingGame.score()).toEqual(0);
	});
	
//	it("Scans 2 A and gets the price 100", function() {
//		var checkout = new CheckOut();
//		checkout.scan("A");
//		checkout.scan("A");
//		expect(checkout.total()).toEqual(100);
//	});
//	
//	it("Scans 3 A and gets the price 130", function() {
//		var checkout = new CheckOut();
//		checkout.scan("A");
//		checkout.scan("A");
//		checkout.scan("A");
//		expect(checkout.total()).toEqual(130);
//	});
});
