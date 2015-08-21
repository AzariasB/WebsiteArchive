
var DATA = {
    ACCELERATION : 1,
    MAX_ACC : 400,
    ROTATION : {
        mult : -1/5,
        add : 120,
        processRotation : function(acceleration){
            return Math.PI / (acceleration * this.mult + this.add);
        }
    }
};