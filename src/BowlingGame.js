var bowlingGame = function () {
    'use strict';
    var totalScore = 0, frames = [],
        firstRollInFrame = true, whichFrameInPlay = 0;

    return {
        frame: function (spec) {
            var firstRoll = spec.firstRoll, secondRoll = 0;

            return {
                setSecondRoll: function (roll) {
                    secondRoll = roll;
                },

                getFirstRoll: function () {
                    return firstRoll;
                },

                getPinsForFrame: function () {
                    return firstRoll + secondRoll;
                },

                isStrike: function () {
                    return firstRoll === 10;
                },

                isSpare: function () {
                    var tenPinsDown = firstRoll + secondRoll === 10;
                    return tenPinsDown && !this.isStrike();
                }
            };
        },

        roll: function (pinsDown) {
            if (firstRollInFrame) {
                frames[whichFrameInPlay] = this.frame({firstRoll: pinsDown});
                if (frames[whichFrameInPlay].isStrike()) {
                    whichFrameInPlay += 1;
                } else {
                    firstRollInFrame = !firstRollInFrame;
                }
            } else {
                frames[whichFrameInPlay].setSecondRoll(pinsDown);
                whichFrameInPlay += 1;
                firstRollInFrame = !firstRollInFrame;
            }
        },

        score: function () {
            var i, scoreForFrame;

            for (i = 0; i < whichFrameInPlay; i += 1) {
                if (i < 10) {
                    scoreForFrame = 0;

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
