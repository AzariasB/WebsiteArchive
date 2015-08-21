/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global Race, imagePath, Phaser, soundPath, _ */

Race.Preloader = function (game) {
    this.backgroundColor = "#fff";
    this.preloadBar = null;

    this.ready = false;
    
    var buttonHeight = 111;
    var buttonLength = 335;
    this.toLoad = {
        'images': {'tiles': 'tileset2.png',
            'star': 'star.png',
            'car': 'car.png',
            'main': 'mainScreen.png',
            'sound' : 'speaker.png',
            'no_sound' : 'no_speaker.png'
        },
        'spitesheets': [
            {
                'name': 'play_button',
                'source': 'play.png',
                'width': buttonLength,
                'height': buttonHeight
            }, {
                'name' : 'options_button',
                'source': 'options.png',
                'width': buttonLength,
                'height': buttonHeight
            }, {
                'name' : 'credits_button',
                'source': 'credits.png',
                'width': buttonLength,
                'height': buttonHeight
            }, {
                'name' : 'leave_button',
                'source': 'quitter.png',
                'width': buttonLength,
                'height': buttonHeight
            }]
        ,
        'tilemap': [{
                'name': 'map',
                'source': '/assets/json/parcours.json'
            }],
        'musics': [{
                'name': 'music',
                'sources': [soundPath + 'loading.mp3']
            }],
        'sounds': []
    };

};


Race.Preloader.prototype = {
    preload: function () {
        this.stage.backgroundColor = '#fff';
        this.bck = this.add.sprite(0, 0, 'preloaderBackground');
//        this.bck.scale.setTo(0.5, 0.5);

        this.anim = this.bck.animations.add('load');
        this.anim.play('load', 1, true);
        //load the loading screen sprites - a blank bar and a blue bar
        //this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
//        this.preloadBar.anchor.setTo(0, 0.5);
//        this.preloadBar.scale.setTo(0.5, 1);
//        this.preloadBar.x = this.world.centerX - this.preloadBar.width / 2;

        //this statement sets the blue bar to represent the actual percentage of data loaded
//        this.load.setPreloadSprite(this.preloadBar);

        //load all the required assets in the game - sprites, music, fonts,etc

        //Tile map
        var self = this;
        _.each(this.toLoad.tilemap, function (tileMap) {
            self.load.tilemap(tileMap.name, tileMap.source, null, Phaser.Tilemap.TILED_JSON);
        });

        //Images
        _.each(this.toLoad.images, function (source,key) {
            self.load.image(key, imagePath + source);
        });

        _.each(this.toLoad.spitesheets, function (spritesheet) {
            self.load.spritesheet(spritesheet.name, imagePath + spritesheet.source, spritesheet.width, spritesheet.height);
        });

        //Sounds & music
        _.each(this.toLoad.musics, function (music) {
            self.load.audio(music.name, music.sources);
        });


    },
    create: function () {
//        this.preloadBar.cropEnabled = false;

    },
    update: function () {

        //checking whether the music is ready to be played before proceeding to the Main Menu.

        if (this.cache.isSoundDecoded('music') && this.ready === false)
        {
            this.ready = true;
            this.state.start('MainMenu');
        }

    }

};

        