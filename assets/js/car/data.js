
var DATA = {
    ACCELERATION: 1,
    debug: true,
    isDebug: function () {
        return this.debug;
    },
    MAX_ACC: 400,
    ROTATION: {
        mult: -1 / 10,
        add: 120,
        processRotation: function (speed) {
            return Math.PI / (speed * this.mult + this.add);
        }
    }
};