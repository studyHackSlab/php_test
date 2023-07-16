var count = 0;
var random = Math.floor(Math.random() * 5) + 6;

// data = new Array();
// data[0] = new Array(2);
// data[1] = new Array(2);
// data[2] = new Array(2);
// data[3] = new Array(2);
// data[4] = new Array(2);
// data[5] = new Array(2);

arrayset();

function imgchange() {

    // window.addEventListener("load", () => {
    // var image = document.getElementById("img");

    var img = new Array();

    img[0] = new Image();
    img[0].src = "../img/cat-00.jpg";
    img[1] = new Image();
    img[1].src = "../img/cat-01.jpg";
    img[2] = new Image();
    img[2].src = "../img/cat-02.jpg";
    img[3] = new Image();
    img[3].src = "../img/cat-03.jpg";
    img[4] = new Image();
    img[4].src = "../img/cat-04.jpg";

    // console.log(data[0][0]);
    // console.log(data[0][1]);
    // console.log(data[1][0]);
    // console.log(data[1][1]);
    // console.log(data[2][0]);
    // console.log(data[2][1]);
    // console.log(data[3][0]);
    // console.log(data[3][1]);
    // console.log(data[4][0]);
    // console.log(data[4][1]);
    // console.log(data[5][0]);
    // console.log(data[5][1]);


    // data[0][0] = "小吉";
    // data[0][1] = "../img/cat-01.jpg";
    // data[1][0] = 中吉;
    // data[1][1] = "../img/cat-02.jpg";
    // data[2][0] = 大吉;
    // data[2][1] = "../img/cat-03.jpg";


    // var imgsrc = "../img/cat-01.jpg";

    // document.getElementById("img").src = img[count].src;
    document.getElementById("img").src = data[count][1];
    document.getElementById("result").innerText = data[count][0];
    // image.src = "../img/cat-01.jpg";
    // window.open(image.src);
    // });

    console.log(count);
    // console.log(img[count].src);
    console.log(data[count][1]);
    count++;
    if (count == random+1) {
        count = 0;
        arrayset();
        // data = shuffle(data);
    }

    document.getElementById("log").innerText = random;
}

function arrayset() {
    random = Math.floor(Math.random() * 5) + 6;
    data = new Array();
    for (i = 0; i < random; i++) {
        data[i] = new Array(2);
    }

    // data = new Array();
    // data[0] = new Array(2);
    // data[1] = new Array(2);
    // data[2] = new Array(2);
    // data[3] = new Array(2);
    // data[4] = new Array(2);
    // data[5] = new Array(2);

    for (var i = 0; i < random; i++) {

        // for (var i = 0; i < 6; i++) {

        if (i == 0) {
            data[i][0] = "1等";
            data[i][1] = "../img/cat-03.jpg";
        } else if (i < 3) {
            data[i][0] = "2等";
            data[i][1] = "../img/cat-02.jpg";
        }
        else {
            data[i][0] = "3等";
            data[i][1] = "../img/cat-01.jpg";
        }
        // console.log(data[i][1]);
    }

    data = shuffle(data);

    data[random] = new Array(2);
    data[random][0] = "特賞";
    data[random][1] = "../img/cat-04.jpg";
}

function shuffle(arrays) {
    const array = arrays.slice();
    // const array = arrays;
    // const array = new Array(6);
    // array = arrays;
    console.log(array);
    for (let i = array.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}

// window.addEventListener("load", () => {
//     let image = document.getElementById("img");

//     image.src = "../img/cat-01.jpg";
// });