
/* global Phaser */

/**
 * 
 * 
 * Setting up the size of the game, and the main characteristics of 
 * the game object
 * @type type
 */

var Race = {};
var imagePath = '/assets/images/game/';
var soundPath = '/assets/Sounds/';

Race.Boot = function (game) {
};

Race.Boot.prototype = {
    preload: function () {
//load assets for the loading screen
        this.load.spritesheet('preloaderBackground', imagePath + 'loading_sprites.png',564,376,6);

    },
    create: function () {

        if (this.game.device.desktop) //if playing on desktop
        {
            this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT; //always show whole game
            this.scale.pageAlignHorizontally = true; //align horizontally
            this.scale.pageAlignVertically = true;
        }
        else
        {

            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = 150;  //set up minimum and maximum game widths allowed.
            this.scale.minHeight = 250;
//above and below these limits, the show_all attribute wont bother scaling
            this.scale.maxWidth = 600;
            this.scale.maxHeight = 1000;
            this.scale.forceLandscape = false;
            this.scale.pageAlignHorizontally = true;

        }

        this.scale.refresh()  //apply the setting we set up
        this.state.start('Preloader');   //start the Preloader state

    }
};

