var spanSec = 0;
var time;
var speed = 1500;
var characters = "basic";
var startButton;
var stopButton;
var resetButton;
var intervalId;

var num1 = Math.floor(Math.random() * 21);
var num2 = Math.floor(Math.random() * 21);

console.log(num1);
console.log(num2);
document.getElementById('num1').textContent = num1;
document.getElementById('num2').textContent = num2;

var answer = num1 + num2;

// document.getElementById('answer').textContent = answer;

window.onload = function () {

    time = document.getElementById('time');

    startButton = document.getElementById('start');
    stopButton = document.getElementById('stop');
    resetButton = document.getElementById('reset');

    startButton.onclick = function () {

        //速さを取得
        speed = 1500;

        let speedRadio = document.getElementsByName('speed');
        // let len = speedRadio.length;
        len = speedRadio.length;
        // speedRadio[0].checked = true;
        speedRadio[0].checked = "";

        // let checkValue = speed;
        for (let i = 0; i < len; i++) {
            if (speedRadio.item(i).checked) {
                // checkValue = speedRadio.item(i).value;
                speed = speedRadio.item(i).value;
            }
        }

        stop();
        spanSec = 0;
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
            if (spanSec % 2 == 0) {
                sec.innerHTML = Math.ceil(spanSec / 2);
                answer = num1 + num2;
                document.getElementById('num1').textContent = num1;
                document.getElementById('num2').textContent = num2;
                document.getElementById('answer').textContent = answer;

            }
            else {
                sec.innerHTML = Math.ceil(spanSec / 2);
                num1 = Math.floor(Math.random() * 21);
                num2 = Math.floor(Math.random() * 21);
                document.getElementById('num1').textContent = num1;
                document.getElementById('num2').textContent = num2;
                document.getElementById('answer').textContent = null;
                // answer = num1 + num2;
                // document.getElementById('answer').textContent = answer;
            }
        }, Number(speed));
        console.log(speed);
    }
    console.log(speed);
}

function stop() {
    clearInterval(intervalId);
    intervalId = null;
}

function reset() {
    spanSec = 0;
    time.innerHTML = spanSec;

}