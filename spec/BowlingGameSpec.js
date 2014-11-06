describe("A bowling game", function () {

    it("should give a score of zero for rolling a gutter ball", function () {
        var thisGame = bowlingGame();
        thisGame.roll(0);
        thisGame.roll(0);
        expect(thisGame.score()).toEqual(0);
    });

    it("should give a score of 2 by knocking down 2 pins", function () {
        var thisGame = bowlingGame();
        thisGame.roll(2);
        thisGame.roll(0);
        expect(thisGame.score()).toEqual(2);
    });

    it("should give a score of 5 by knocking down 2 pins then 3", function () {
        var thisGame = bowlingGame();
        thisGame.roll(2);
        thisGame.roll(3);
        expect(thisGame.score()).toEqual(5);
    });

    it("should give a score of 10 by knocking down 4 pins then 3 pins then 2 then 1", function () {
        var thisGame = bowlingGame();
        thisGame.roll(4);
        thisGame.roll(3);
        thisGame.roll(2);
        thisGame.roll(1);
        expect(thisGame.score()).toEqual(10);
    });

    it("should score a spare on the first frame", function () {
        var thisGame = bowlingGame();
        thisGame.roll(5);
        thisGame.roll(5);
        thisGame.roll(3);
        thisGame.roll(0);
        expect(thisGame.score()).toEqual(16);
    });

    it("should score a strike on first frame", function () {
        var thisGame = bowlingGame();
        thisGame.roll(10);
        thisGame.roll(3);
        thisGame.roll(6);
        expect(thisGame.score()).toEqual(28);
    });

    it("should score two strikes in a row properly", function () {
        var thisGame = bowlingGame();
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(2);
        thisGame.roll(3);
        expect(thisGame.score()).toEqual(42);
    });

    it("should score a perfect game", function () {
        var thisGame = bowlingGame();
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        expect(thisGame.score()).toEqual(300);
    });

    it("should score a near perfect game", function () {
        var thisGame = bowlingGame();
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(0);
        thisGame.roll(10);
        expect(thisGame.score()).toEqual(280);
    });

    it("should score a game that ends in a spare", function () {
        var thisGame = bowlingGame();
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(10);
        thisGame.roll(5);
        thisGame.roll(5);
        thisGame.roll(4);
        expect(thisGame.score()).toEqual(269);
    });

});
