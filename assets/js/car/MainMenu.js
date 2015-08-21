


/* global Race */

Race.MainMenu = function (game) {

};

Race.MainMenu.prototype = {
    create: function () {
        //Ajouts des boutons
        var self = this;
        this.mainScreen = this.add.sprite(0, 0, 'main');
        this.mainScreen.height = this.game.height;
        this.mainScreen.width = this.game.width;
        this.mainScreen.update();

        //Boutons principaux
        var buttonsName = {
            'play_button': self.play,
            'options_button': self.options,
            'credits_button': self.credits,
            'leave_button': self.leave,
        };

        var firstButtonY = 100;
        var buttons = [];

        _.each(buttonsName, function (funcName, key) {
            var button = self.add.button(self.world.centerX - 90, firstButtonY, key, funcName, self, 1, 0);
            firstButtonY += 70;
            buttons.push(button);
        });

        _.each(buttons, function (button) {
            var sc = button.scale;
            sc.x = 0.5;
            sc.y = 0.5;
        });
        //Boutons pour la musique
        this.soundControl = this.add.button(0,0,'sound',this.toggleSound,this);
        
        //Lancement de la musique !
        this.music = this.add.audio('music');
        this.music.onDecoded.add(this.start, this);
    },
    update: function () {
    },
    play: function () {
        this.state.start('Game');
    },
    options: function () {
        this.state.start('Options');
    },
    credits: function () {
        this.state.start('Credits');
    },
    leave: function () {
        //Retour à l'accueil
        window.location.href = window.location.origin;
    },
    toggleSound : function(){
        this.sound.mute = !this.sound.mute;
        this.sound.update();
        this.soundControl.loadTexture(this.soundControl.key === 'sound' ? 'no_sound' : 'sound');
    },
    start: function () {
        this.music.fadeIn(2000);
        this.music.loopFull();
    }
};