

/* global Race, DATA */

Race.Game = function (game) {

};

Race.Game.prototype = {
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
        this.player.scale.set(.2, .2);
        this.player.anchor.x = 0.5;
        this.player.rotation = Math.PI / 2;

        this.player.anchor.y = 0.5;


        //  We need to enable physics on the player
        this.game.physics.arcade.enable(this.player);

        //  Player physics properties. Give the little guy a slight bounce.
        this.player.body.collideWorldBounds = true;
        this.player.body.acceleration = 0;

        this.player.body.bounce = {
            x: 0.1,
            y: 0.1
        };



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


        if (this.cursors.left.isDown && this.player.body.acceleration !== 0) {
            this.player.rotation -= DATA.ROTATION.processRotation(this.player.body.acceleration);
        } else if (this.cursors.right.isDown && this.player.body.acceleration !== 0) {
            this.player.rotation += DATA.ROTATION.processRotation(this.player.body.acceleration);
        }

        if (this.cursors.up.isDown && this.player.body.acceleration < DATA.MAX_ACC) {
            this.player.body.acceleration += DATA.ACCELERATION;
        } else if (this.cursors.down.isDown) {
            this.player.body.acceleration -= DATA.ACCELERATION;
        } else {
            this.reduceAcceleration();
        }

        with (this.player.body.velocity) {
            x /= 2;
            y /= 2;
        }
        this.player.body.velocity.x += Math.sin(this.player.rotation) * this.player.body.acceleration;
        this.player.body.velocity.y -= Math.cos(this.player.rotation) * this.player.body.acceleration;


        this.game.camera.update();
        if (this.player.body.onWall()) {
            this.reduceAcceleration();
        }
    },
    render: function () {

    },
    runOnGrass: function () {
        console.log('Tu marches sur l\'herbes');
    },
    reduceAcceleration: function () {
        var acc = this.player.body.acceleration;
        if (acc < 2) {
            acc = 0;
        } else {
            acc /= 1.05;
        }
        this.player.body.acceleration = acc;
    }
};