var spanSec = 0;
var speed = 1000;
var characters = "basic";
var startButton;
var stopButton;
var resetButton;
var intervalId;

window.onload = function () {

    startButton = document.getElementById('start');
    stopButton = document.getElementById('stop');
    resetButton = document.getElementById('reset');

    startButton.onclick = function () {
        start();
    };

    stopButton.onclick = function () {
        stop();
    };
};

function start() {

    if (intervalId == null) {
        intervalId = setInterval(function () {
            spanSec++;

            let mm = spanSec / 60 | 0;
            mm = ('00' + mm).slice(-2);

            let ss = spanSec % 60;
            ss = ('00' + ss).slice(-2);

            sec.style.fontSize = "10rem";
            document.body.style.backgroundColor = "black";
            sec.style.color = "white";
            switch (spanSec) {
                case 60:
                    sec.innerHTML = "1分";
                    break;
                case 120:
                    sec.innerHTML = "2分";
                    break;
                case 180:
                    sec.innerHTML = "3分";
                    break;
                case 240:
                    sec.innerHTML = "4分";
                    break;
                case 300:
                    sec.innerHTML = "5分";
                    break;
                case 360:
                    sec.innerHTML = "6分";
                    break;
                case 420:
                    sec.innerHTML = "7分";
                    break;
                case 480:
                    sec.innerHTML = "8分";
                    break;
                case 540:
                    sec.innerHTML = "9分";
                    break;
                case 600:
                    sec.innerHTML = "10分";
                    stop();
                    spanSec = 0;
                    break;
                default:

                    if (window.innerWidth < 500) {
                        sec.style.fontSize = "4rem";
                    }
                    else {

                        // let h2_element = document.getElementById("sec");
                        // let h2_css = getComputedStyle(h2_element);
                        // sec.style.fontSize = h2_css.getPropertyValue("font-size");

                        sec.style.fontSize = "8rem";
                    }

                    document.body.style.backgroundColor = "white";
                    sec.style.color = "black";
                    sec.innerHTML = mm + "：" + ss;
            }

        }, Number(speed));
    }
}

function stop() {
    clearInterval(intervalId);
    intervalId = null;
}

function reset() {
    spanSec = 0;
}