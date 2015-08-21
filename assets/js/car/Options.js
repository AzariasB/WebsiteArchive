/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global Race */

Race.Options = function (game) {

};

Race.Options.prototype = {
    create: function () {
        //Ajouts des boutons
        var self = this;
        this.mainScreen = this.add.sprite(0, 0, 'main');
        this.mainScreen.height = this.game.height;
        this.mainScreen.width = this.game.width;
        this.mainScreen.update();

        var buttonsName = {
            'play_button': self.play,
            'options_button': self.options,
            'credits_button': self.credits,
            'leave_button': self.leave
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
        //Lancement de la musique !
        this.music = this.add.audio('music');
        this.music.onDecoded.add(this.start, this);
    }
};