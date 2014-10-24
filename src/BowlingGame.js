function BowlingGame() {
}

BowlingGame.prototype.totalScore = 0;
function Frame(firstRoll) {
	this.firstRoll = firstRoll;
	this.secondRoll = 0;
};

Frame.prototype.isStrike = function() {
	return this.firstRoll == 10;
}

Frame.prototype.isSpare = function() {
	var tenPinsDown = this.firstRoll + this.secondRoll == 10;
	console.log(tenPinsDown);
	return tenPinsDown && !this.isStrike();
}

BowlingGame.prototype.frames = [];
BowlingGame.prototype.firstRollInFrame = true;
BowlingGame.prototype.whichFrameInPlay = 0;

BowlingGame.prototype.roll = function(pinsDown) {
	if (this.firstRollInFrame) {
		this.frames[this.whichFrameInPlay] = new Frame(pinsDown);
		if (this.frames[this.whichFrameInPlay].isStrike()) {
			this.whichFrameInPlay++;
		} else {
			this.firstRollInFrame = !this.firstRollInFrame;
		}
	} else {
		this.frames[this.whichFrameInPlay].secondRoll = pinsDown;
		this.whichFrameInPlay++;
		this.firstRollInFrame = !this.firstRollInFrame;
	}
}

BowlingGame.prototype.score = function() {
	for (var i = 0; i < this.whichFrameInPlay; i++) {
		if (i < 10) {
			var scoreForFrame = 0;
		
			scoreForFrame += this.frames[i].firstRoll;
			scoreForFrame += this.frames[i].secondRoll;

			if (this.frames[i].isSpare()) {
				scoreForFrame += this.frames[i + 1].firstRoll;
			}

			if (this.frames[i].isStrike()) {
				if (this.frames[i + 1].isStrike()) {
					scoreForFrame += this.frames[i + 1].firstRoll;
					scoreForFrame += this.frames[i + 2].firstRoll;
				} else {
					scoreForFrame += this.frames[i + 1].firstRoll;
					scoreForFrame += this.frames[i + 1].secondRoll;
				}
			}

		this.totalScore += scoreForFrame;

		}
	}
	return this.totalScore;
}
