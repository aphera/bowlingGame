function BowlingGame() {
}

BowlingGame.prototype.totalScore = 0;
BowlingGame.prototype.frames = [];
BowlingGame.prototype.firstRollInFrame = true;
BowlingGame.prototype.whichFrameInPlay = 0;

var frame = function (firstRoll) {
	var firstRoll = firstRoll;
	var secondRoll = 0;

	return {
		setSecondRoll: function(roll) {
			secondRoll = roll;
		},

		getFirstRoll: function() {
			return firstRoll;
		},

		getPinsForFrame: function() {
			return firstRoll + secondRoll;
		},

		isStrike: function() {
			return firstRoll == 10;
		},

		isSpare: function() {
			var tenPinsDown = firstRoll + secondRoll == 10;
			return tenPinsDown && !this.isStrike();
		}
	};
};

BowlingGame.prototype.roll = function(pinsDown) {
	if (this.firstRollInFrame) {
		this.frames[this.whichFrameInPlay] = frame(pinsDown);
		if (this.frames[this.whichFrameInPlay].isStrike()) {
			this.whichFrameInPlay++;
		} else {
			this.firstRollInFrame = !this.firstRollInFrame;
		}
	} else {
		this.frames[this.whichFrameInPlay].setSecondRoll(pinsDown);
		this.whichFrameInPlay++;
		this.firstRollInFrame = !this.firstRollInFrame;
	}
}

BowlingGame.prototype.score = function() {
	for (var i = 0; i < this.whichFrameInPlay; i++) {
		if (i < 10) {
			var scoreForFrame = 0;
		
			scoreForFrame += this.frames[i].getPinsForFrame();

			if (this.frames[i].isSpare()) {
				scoreForFrame += this.frames[i + 1].getFirstRoll();
			}

			if (this.frames[i].isStrike()) {
				if (this.frames[i + 1].isStrike()) {
					scoreForFrame += this.frames[i + 1].getFirstRoll();
					scoreForFrame += this.frames[i + 2].getFirstRoll();
				} else {
					scoreForFrame += this.frames[i + 1].getPinsForFrame();
				}
			}

		this.totalScore += scoreForFrame;

		}
	}
	return this.totalScore;
}
