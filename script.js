document.addEventListener("keydown", function (event) {
    if (event.key == "A") {
        keyA();
        console.log("А - работает, лопушок!");
    } else if (event.key == "a") {
        keyA();
        console.log("а - работает, лопушок!");
    } else if (event.key == "S") {
        keyS();
        console.log("The 'S' key is pressed.");
    } else if (event.key == "s") {
        keyS();
        console.log("The 's' key is pressed.");
    } else if (event.key == "D") {
        keyD();
        console.log("The 'D' key is pressed.");
    } else if (event.key == "d") {
        keyD();
        console.log("The 'd' key is pressed.");
    } else if (event.key == "F") {
        keyF();
        console.log("The 'F' key is pressed.");
    } else if (event.key == "f") {
        keyF();
        console.log("The 'f' key is pressed.");
    } else if (event.key == "G") {
        keyG();
        console.log("The 'G' key is pressed.");
    } else if (event.key == "g") {
        keyG();
        console.log("The 'g' key is pressed.");
    } else if (event.key == "H") {
        keyH();
        console.log("The 'H' key is pressed.");
    } else if (event.key == "h") {
        keyH();
        console.log("The 'h' key is pressed.");
    } else if (event.key == "J") {
        keyJ();
        console.log("The 'J' key is pressed.");
    } else if (event.key == "j") {
        keyJ();
        console.log("The 'j' key is pressed.");
    } else if (event.key == "W") {
        keyW();
        console.log("The 'W' key is pressed.");
    } else if (event.key == "w") {
        keyW();
        console.log("The 'w' key is pressed.");
    } else if (event.key == "E") {
        keyE();
        console.log("The 'E' key is pressed.");
    } else if (event.key == "e") {
        keyE();
        console.log("The 'e' key is pressed.");
    } else if (event.key == "T") {
        keyT();
        console.log("The 'T' key is pressed.");
    } else if (event.key == "t") {
        keyT();
        console.log("The 't' key is pressed.");
    } else if (event.key == "Y") {
        keyY();
        console.log("The 'Y' key is pressed.");
    } else if (event.key == "y") {
        keyY();
        console.log("The 'y' key is pressed.");
    } else if (event.key == "U") {
        keyU();
        console.log("The 'U' key is pressed.");
    } else if (event.key == "u") {
        keyU();
        console.log("The 'u' key is pressed.");
    } else console.log("Warning!");
});

function keyA() {
    let audio1 = document.createElement('audio');
    audio1.src = 'white_keys/A.mp3';
    audio1.play();
}

function keyS() {
    let audio2 = document.createElement('audio');
    audio2.src = 'white_keys/S.mp3';
    audio2.play();
}

function keyD() {
    let audio3 = document.createElement('audio');
    audio3.src = 'white_keys/D.mp3';
    audio3.play();
}

function keyF() {
    let audio4 = document.createElement('audio');
    audio4.src = 'white_keys/F.mp3';
    audio4.play();
}

function keyG() {
    let audio5 = document.createElement('audio');
    audio5.src = 'white_keys/G.mp3';
    audio5.play();
}

function keyH() {
    let audio6 = document.createElement('audio');
    audio6.src = 'white_keys/H.mp3';
    audio6.play();
}

function keyJ() {
    let audio7 = document.createElement('audio');
    audio7.src = 'white_keys/J.mp3';
    audio7.play();
}

function keyW() {
    let audio8 = document.createElement('audio');
    audio8.src = 'black_keys/W.mp3';
    audio8.play();
}

function keyE() {
    let audio9 = document.createElement('audio');
    audio9.src = 'black_keys/E.mp3';
    audio9.play();
}

function keyT() {
    let audio10 = document.createElement('audio');
    audio10.src = 'black_keys/T.mp3';
    audio10.play();
}

function keyY() {
    let audio11 = document.createElement('audio');
    audio11.src = 'black_keys/Y.mp3';
    audio11.play();
}

function keyU() {
    let audio12 = document.createElement('audio');
    audio12.src = 'black_keys/U.mp3';
    audio12.play();
}