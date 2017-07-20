function getRandomBrightColor() {
    let hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 50%)`
}
function getRandomDarkColor() {
    let hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 25%)`
}

const W = canvas.width;
const H = canvas.height;

canvas.style.backgroundColor =  '#012';

let x = 0;
let y = 0;

let hue = 300;

function drawLine() {
    cx.beginPath();
    cx.strokeStyle = getRandomDarkColor();
    cx.lineWidth = 5;
    cx.moveTo(x, y);
    cx.lineTo(window.innerWidth, y);
    cx.stroke();

    y += 10;

    if (hue > 359) {
        hue = 0;
    }
    else {
        hue += 20;
    }
}

function drawRect(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    cx.fillStyle = getRandomBrightColor();;
    cx.fillRect(x, y, 100, 50);
}

setInterval(drawLine, 1000)

canvas.addEventListener('mousemove', drawRect);