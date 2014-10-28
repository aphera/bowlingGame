var bowlingGame = function() {
	var totalScore = 0;
	var frames = [];
	var firstRollInFrame = true;
	var whichFrameInPlay = 0;

	return {
		frame: function (firstRoll) {
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
		},

		roll: function(pinsDown) {
			if (firstRollInFrame) {
				frames[whichFrameInPlay] = this.frame(pinsDown);
				if (frames[whichFrameInPlay].isStrike()) {
					whichFrameInPlay++;
				} else {
					firstRollInFrame = !firstRollInFrame;
				}
			} else {
				frames[whichFrameInPlay].setSecondRoll(pinsDown);
				whichFrameInPlay++;
				firstRollInFrame = !firstRollInFrame;
			}
		},

		score: function() {
			for (var i = 0; i < whichFrameInPlay; i++) {
				if (i < 10) {
					var scoreForFrame = 0;
				
					scoreForFrame += frames[i].getPinsForFrame();
		
					if (frames[i].isSpare()) {
						scoreForFrame += frames[i + 1].getFirstRoll();
					}
		
					if (frames[i].isStrike()) {
						if (frames[i + 1].isStrike()) {
							scoreForFrame += frames[i + 1].getFirstRoll();
							scoreForFrame += frames[i + 2].getFirstRoll();
						} else {
							scoreForFrame += frames[i + 1].getPinsForFrame();
						}
					}
		
				totalScore += scoreForFrame;
		
				}
			}
			return totalScore;
		}
	};
};
