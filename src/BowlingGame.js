function BowlingGame() {
}

BowlingGame.prototype.totalScore = 0;

BowlingGame.prototype.roll = function(pinsDown) {
	this.totalScore += pinsDown;
}

BowlingGame.prototype.score = function() {
	return this.totalScore;
}
