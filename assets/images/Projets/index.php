<!DOCTYPE html>


<html>
    <head>
        <meta charset="UTF-8">
        <title>Accès interdit</title>
        <link rel="icon"  href="http://azarias.byethost12.com/assets/images/icons/icon_512.png" />
        
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet" />
        <style>
            *{
                cursor: default;
            }
            html,body{
                height: 100vh;
                vertical-align: middle;
            }
            div{
                height: 100vh;
                vertical-align: middle;
                text-align: center;
            }
            h1{
                vertical-align: middle;
                width: 10em;
                height: 2em;
                margin-left: auto;
                margin-right: auto;
                margin-top: 0px;
                margin-bottom: 0px;
                text-align: center;
                margin-top: 40vh;
            }
        </style>
    </head>
    <body>
        <div>
            <div class="col-xs-12 text-center">
                <h1 onmouseover="begin()" onmouseout="pause()" id="titre" >Accès interdit</h1>
            </div>
        </div>
        <audio src="http://azarias.byethost12.com/assets/Sounds/noooooo.mp3" id="sound" type="audio/mp3" >

        </audio>
        <script>
            var CHANGE = false;
            var current_color = 0xffffff;
            var myAudio = document.getElementById('sound');

            function begin() {
                CHANGE = true;
                changeColor(0x010101);
                myAudio.play();
            }
            function pause() {
                CHANGE = false;
                myAudio = document.getElementById('sound');
                myAudio.pause();
            }

            function changeColor(colorUpdate) {
                if (current_color - colorUpdate < 0) {
                    console.log("Début");
                    current_color = 0 + colorUpdate;
                } else if (current_color - colorUpdate > 0xffffff) {
                    current_color = 0xffffff - colorUpdate;

                }

                if (current_color - colorUpdate >= 0 && current_color - colorUpdate <= 0xffffff) {
                    var html = document.getElementsByTagName('body')[0];
                    current_color -= colorUpdate;
                    html.style.backgroundColor = "rgb(" + hexToRgb(current_color) + ")";
                    html.style.color = "rgb(" + hexToRgb(0xffffff - current_color) + ")";

                    if (CHANGE) {
                        setTimeout(function () {
                            changeColor(0x010101);
                        }, 10);
                    } else {
                        setTimeout(function () {
                            changeColor(-0x010101);
                        }, 10);
                    }
                }
                if(myAudio.ended){
                    myAudio.play();
                }

            }

            function hexToRgb(hex) {
                var r = hex >> 16;
                var g = hex >> 8 & 0xFF;
                var b = hex & 0xFF;

                return r + "," + g + "," + b;
            }
        </script>
    </body>
</html>
