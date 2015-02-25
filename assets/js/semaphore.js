/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('semaphore', []);

app.controller('game', function ($timeout) {
    var that = this;
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.current_letter = this.alphabet[Math.floor(Math.random() * 26)];
    this.user_letter;
    this.score = 0;
    this.commentaries = '...';
    this.d_time = '00:00:00';
    //   this.chrono();
    this.paused = false;

    this.new_letter = function () {
        var letter = Math.floor(Math.random() * 26);
        while (this.alphabet[letter] === this.current_letter) {
            letter = Math.floor(Math.random() * 26);
        }
        this.current_letter = this.alphabet[letter];
    };

    this.user_input = function () {
        var answer = this.user_letter;
        this.user_letter = '';
        if (answer === this.current_letter) {
            this.commentaries = 'Bien joué !';
            this.score++;
        } else {
            this.commentaries = 'Faux, la réponse était : ' + this.current_letter;
        }
        this.new_letter();
    };

    this.chrono = function () {
        if (!this.paused) {
            if (this.d_time !== null) {
                this.d_time = this.time(this.d_time);
            }
            $timeout(function () {
                that.chrono();
            }, 1000);
        }
    };

    this.pause = function () {
        $('#answer').prop("disabled",true);
        $('#pause').attr("disabled","disabled");
        $('#continue').prop('disabled',false);
        this.paused = true;
    };

    this.unpause = function () {
        if (this.paused) {
            $('#pause').prop("disabled",false);
            $('#answer').prop("disabled",false);
            $('#continue').prop("disabled",true);
            this.paused = false;
            this.chrono();
        }

    };

    this.time = function (time) {
        time = time.trim();
        var hour = parseInt(time.substr(0, 2));
        var minute = parseInt(time.substr(3, 2));
        var second = parseInt(time.substr(6, 2));
        second++;

        if (second > 59) {
            second = 0;
            minute++;
        }
        if (minute > 59) {
            minute = 0;
            hour++;
        }

        if (second < 10) {
            second = "0" + second.toString();
        }
        if (minute < 10) {
            minute = "0" + minute.toString();
        }
        if (hour < 10) {
            hour = "0" + hour.toString();
        }


        return hour + ':' + minute + ':' + second;
    };
});