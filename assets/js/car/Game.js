

/* global Race, DATA, Phaser */

Race.Game = function (game) {

};

Race.Game.prototype = {
    preload: function () {
        this.time.advancedTiming = true;
    },
    create: function () {
        this.game.stage.backgroundColor = '#787878';

        this.map = this.game.add.tilemap('map');

        this.map.addTilesetImage('tileset2', 'tiles');


        this.layer = this.map.createLayer('Route');
        this.objects = this.map.objects.Objects;
        this.layer.setScale(4, 4);
        this.map.setCollision(49);
        this.layer.debug = true;
        this.layer.resizeWorld();

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.enable(this.layer);
// game.world.setBounds(0, 0, 2000, 2000);



        // The player and its settings
        this.player = this.game.add.sprite(this.objects[0].x * this.layer.scale.x, this.objects[0].y * this.layer.scale.y, 'car');
        this.player.scale.set(.5, .5);
        this.player.anchor.x = 0.5;
        this.player.anchor.y = 0.5;


        //  We need to enable physics on the player
        this.game.physics.arcade.enable(this.player);

        with (this.player.body) {
            collideWorldBounds = true;
            acceleration.set(0);
            traction = 500;
            maxVelocity.set(500);
        }




        //  Our controls.
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.camera.follow(this.player);
        console.log(this);
    },
    update: function () {

        //  Collide the player and the stars with the platforms
        this.game.physics.arcade.overlap(this.player, this.layer, this.runOnGrass);

        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function

        //  Reset the players velocity (movement)
        //player.body.velocity.x = 0;

        if (this.cursors.left.isDown && this.player.body.velocity.getMagnitude() !== 0) {
            this.player.body.angularVelocity = -300;
        } else if (this.cursors.right.isDown && this.player.body.velocity.getMagnitude() !== 0) {
            this.player.body.angularVelocity = 300;
        } else {
            this.player.body.angularVelocity = 0;
        }

        if (this.cursors.up.isDown) {
            //var asteroidAcc = this.physics.arcade.accelerationFromRotation(this.player.rotation, 200);
            this.player.body.acceleration.add(10,10);
            
        } else if (this.cursors.down.isDown) {
            var carAcceleration = new Phaser.Point(DATA.ACCELERATION, DATA.ACCELERATION);
            carAcceleration = Phaser.Point.negative(carAcceleration);
            var asteroidAcc = this.physics.arcade.accelerationFromRotation(this.player.rotation, 200);


        } else {
            this.player.body.acceleration.set(0);
            this.reduceSpeed();
        }

        /*with (this.player.body.velocity) {
            x = Math.cos(this.player.rotation) * this.player.body.acceleration.x;
            y = Math.sin(this.player.rotation) * this.player.body.acceleration.y;
        }*/

        this.game.camera.update();
    },
    render: function () {
        DATA.isDebug() && this.game.debug.text(this.time.fps || '--', 2, 14, '#fff');
        DATA.isDebug() && this.game.debug.text(this.time.suggestedFps || '--', 2, 30, '#fff');
    },
    reduceSpeed: function () {
        with (this.player.body.velocity) {
            x /= 1.1;
            y /= 1.1;
            Math.abs(x) < 1 && (x = 0);
            Math.abs(y) < 1 && (y = 0);
        }
    }
};