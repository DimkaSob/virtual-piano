const keys = [
    {
        note: 'A',
        color: 'white',
        keyCode: 65,
        audioPath: 'white_keys/A.mp3'
    },
    {
        note: 'S',
        color: 'white',
        keyCode: 83,
        audioPath: 'white_keys/S.mp3'
    },
    {
        note: 'D',
        color: 'white',
        keyCode: 68,
        audioPath: 'white_keys/D.mp3'
    },
    {
        note: 'F',
        color: 'white',
        keyCode: 70,
        audioPath: 'white_keys/F.mp3'
    },
    {
        note: 'G',
        color: 'white',
        keyCode: 71,
        audioPath: 'white_keys/G.mp3'
    },
    {
        note: 'H',
        color: 'white',
        keyCode: 72,
        audioPath: 'white_keys/H.mp3'
    },
    {
        note: 'J',
        color: 'white',
        keyCode: 74,
        audioPath: 'white_keys/J.mp3'
    },
    {
        note: 'W',
        color: 'black',
        keyCode: 87,
        audioPath: 'black_keys/W.mp3'
    },
    {
        note: 'E',
        color: 'black',
        keyCode: 69,
        audioPath: 'black_keys/E.mp3'
    },
    {
        note: 'T',
        color: 'black',
        keyCode: 84,
        audioPath: 'black_keys/T.mp3'
    },
    {
        note: 'Y',
        color: 'black',
        keyCode: 89,
        audioPath: 'black_keys/Y.mp3'
    },
    {
        note: 'U',
        color: 'black',
        keyCode: 85,
        audioPath: 'black_keys/U.mp3'
    }
];

keys.forEach(function(item) {
    if (item.color === 'white') {
        let kbd = document.createElement('kbd');
        kbd.innerText = item.note;
        let divWhiteKeys = document.querySelector('.white-keys')
        divWhiteKeys.append(kbd);
        kbd.id = "button";
    } else {
        let kbdBlack = document.createElement('kbd');
        kbdBlack.innerText = item.note;
        let divBlackKeys = document.querySelector('.black-keys');
        divBlackKeys.append(kbdBlack);
        kbdBlack.id = "button";
        if (item.note === 'E') {
            kbdBlack.classList.add('gap');
        };
    };
    
});

let keyButton = document.getElementById('button');
let allKeys = document.querySelector('.container');

allKeys.addEventListener('click', function(event) {
    let key = event.target.innerText;
    
    keys.find(item => {
        if (item.note === key) {
            audioPlay(item);
        };
    });
}); 

document.addEventListener("keydown", function (event) {
    let key = event.keyCode;

    keys.find(item => {
        if (item.keyCode === key) {
            audioPlay(item);
        };
    });
});

function audioPlay (item) {
    const audio = document.createElement('audio');
    audio.src = item.audioPath;
    audio.play();
};



/*burger-menu*/
const signature = document.querySelector(".signature");
const burger = document.querySelector(".burger");

function toggleMenu () {
    signature.classList.toggle("showMenu");
    burger.classList.toggle("active");
};

function linkCloseMenu () {
    signature.classList.remove("showMenu");
    burger.classList.remove("active");
};

burger.addEventListener("click", toggleMenu);
signature.addEventListener("click", toggleMenu);
//link.addEventListener("click", linkCloseMenu);

