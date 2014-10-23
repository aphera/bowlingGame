function BowlingGame() {
}

BowlingGame.prototype.totalScore = 0;
function Frame(firstRoll, secondRoll) {
	this.firstRoll = firstRoll;
	this.secondRoll = secondRoll;
};
BowlingGame.prototype.frames = [];
BowlingGame.prototype.firstRollInFrame = true;
BowlingGame.prototype.whichFrameInPlay = 0;

BowlingGame.prototype.roll = function(pinsDown) {
	if (this.firstRollInFrame) {
		this.frames[this.whichFrameInPlay] = new Frame(pinsDown);
	} else {
		this.frames[this.whichFrameInPlay].secondRoll = pinsDown;
		this.whichFrameInPlay++;
	}
	this.firstRollInFrame = !this.firstRollInFrame;
}

BowlingGame.prototype.score = function() {
	for (var i = 0; i < this.whichFrameInPlay; i++) {
		var scoreForFrame = 0;
		
		scoreForFrame += this.frames[i].firstRoll;
		scoreForFrame += this.frames[i].secondRoll;

		if (scoreForFrame == 10) {
			scoreForFrame += this.frames[i + 1].firstRoll;
		}

		this.totalScore += scoreForFrame;
	}
	return this.totalScore;
}
