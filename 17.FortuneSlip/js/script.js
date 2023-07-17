var count = 0;
var random = Math.floor(Math.random() * 5) + 6;
var data = new Array();
var color = new Array('350e43','#E5004F','#920783','#1D2088','#0068B7','#E4007F','#F39800','#009E96','#009944','#8FC31F','#834E00','#920783');
// data = new Array();
// data[0] = new Array(2);
// data[1] = new Array(2);
// data[2] = new Array(2);
// data[3] = new Array(2);
// data[4] = new Array(2);
// data[5] = new Array(2);

arrayset();

function imgchange() {

    document.getElementById("img").src = data[count][1];
    document.getElementById("result").innerText = data[count][0];
    document.getElementById("result").style.backgroundColor = color[count];
    // background-color: #350e43;
    // background-color: ;
    // background-color: #661982;



    console.log(count);
    // console.log(img[count].src);
    console.log(data[count][1]);
    count++;

    // くじ引き引き終わり
    if (count == random+1) {
        document.getElementById("button").innerHTML = "はじめから";
        // data = shuffle(data);
    }

    // くじ引きリセット
    if (count == random+2) {
        count = 0;
        arrayset();
        document.getElementById("button").innerHTML = "くじを引く";
        document.getElementById("result").innerText = "ボタンをクリックしてね。";

    }

    // document.getElementById("log").innerText = random;
}

// くじ引きセット関数
function arrayset() {

    random = Math.floor(Math.random() * 5) + 6;

    data = new Array();

    // 配列の生成
    for (var i = 0; i < random; i++) {
        data[i] = new Array(2);
    }

    // 配列にくじを入れる
    for (i = 0; i < random; i++) {

        // for (var i = 0; i < 6; i++) {

        if (i == 0) {
            data[i][0] = "1等";
            data[i][1] = "img/cat-03.jpg";
        } else if (i < 3) {
            data[i][0] = "2等";
            data[i][1] = "img/cat-02.jpg";
        }
        else {
            data[i][0] = "3等";
            data[i][1] = "img/cat-01.jpg";
        }
        // console.log(data[i][1]);
    }

    // くじをシャッフルする
    data = shuffle(data);

    // 最後に特賞を入れる
    data[random] = new Array(2);
    data[random][0] = "特賞";
    data[random][1] = "img/cat-04.jpg";

    // 空のくじを入れる
    data[random+1] = new Array(2);
    data[random+1][0] = "";
    data[random+1][1] = "img/cat-04.jpg";
}

// シャッフル関数
function shuffle(arrays) {
    // const array = arrays.slice();
    const array = arrays;
    // const array = new Array(6);
    // array = arrays;
    console.log(array);
    for (let i = array.length - 1; i >= 0; i--) {
        const randomindex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomindex]] = [array[randomindex], array[i]];
    }
    return array;
}