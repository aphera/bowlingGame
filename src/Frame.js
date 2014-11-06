var frame = function (spec) {
    'use strict';
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
};
