describe("A frame", function () {

    it("should know that a strike is 10 pins down on the first roll", function () {
        var aFrame = frame({firstRoll: 10});
        expect(aFrame.isStrike()).toEqual(true);
    });

    it("should know that a strike is not 10 pins knocked down over 2 rolls in one frame", function () {
        var aFrame = frame({firstRoll: 9});
        aFrame.setSecondRoll(1);
        expect(aFrame.isStrike()).toEqual(false);
    });

    it("should know that a spare is 10 pins knocked down over 2 rolls in one frame", function () {
        var aFrame = frame({firstRoll: 5});
        aFrame.setSecondRoll(5);
        expect(aFrame.isSpare()).toEqual(true);
    });

    it("should know that if I knock down 10 pins in my first roll of a frame it's not a spare", function () {
        var aFrame = frame({firstRoll: 10});
        expect(aFrame.isSpare()).toEqual(false);
    });

    it("should know that if I knock down 9 pins over two rolls for a frame it's not a spare", function () {
        var aFrame = frame({firstRoll: 5});
        aFrame.setSecondRoll(4);
        expect(aFrame.isSpare()).toEqual(false);
    });

});
