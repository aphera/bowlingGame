var bowlingGame = function () {
    'use strict';
    var frames = [], firstRollInFrame = true, whichFrameInPlay = 0;

    return {
        roll: function (pinsDown) {
            if (firstRollInFrame) {
                frames[whichFrameInPlay] = frame({firstRoll: pinsDown});
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
            var i, scoreForFrame, totalScore = 0;

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
