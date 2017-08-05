// 20170803
import drawLine from '../modules/drawLine';
import getNewCoords from '../modules/getNewCoords';
import getRandomColor from '../modules/getRandomColor';
import clearCanvas from '../modules/clearCanvas';

const d20170803 = () => {
    const canvas = document.querySelector('canvas');
    const cx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.backgroundColor = 'red';

    const size = { w: window.innerWidth, h: window.innerHeight };
    let coords = { x: size.w / 2, y: size.h / 2 };
    let directionChoice = 'right';
    // could change to directionChoice if no diagonals
    let directions = { dX: 'right', dY: ''}; // probably not needed

    let speed = 10;
    let spacer = 10;
    let hue = 240;
    let brushSize = 5;
    let color = `hsl(${hue}, 50%, 75%)`;
    let isDrawing = true;
    let frameCount = 0;

    const directionKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    }
    const speedKeys = {
      49: 2,
      50: 4,
      51: 6,
      52: 8,
      53: 10,
      54: 12,
      55: 14,
      56: 16,
      57: 18,
    }
    const brushSizeKeys = {
      189: 'decrease',
      187: 'increase'
    }

    const renderFrame = (ms) => {
      requestAnimationFrame(renderFrame);
      if (isDrawing) {
        frameCount++;
        [directions, coords] = getNewCoords(size, coords, speed, directions, directionChoice);
        color = getRandomColor();
        spacer = speed + brushSize;
        drawLine(cx, coords, spacer, color, brushSize, frameCount);
      }
    }

    const handler = (e) => {
      if (directionKeys.hasOwnProperty(e.keyCode)) {
        directionChoice = directionKeys[e.keyCode];
      }
      if (brushSizeKeys.hasOwnProperty(e.keyCode)) {
        brushSize = brushSizeKeys[e.keyCode] === 'increase' ? brushSize += 5 : brushSize -= 5;
        spacer += brushSize;
      }
      if (speedKeys.hasOwnProperty(e.keyCode)) {
        speed = speedKeys[e.keyCode];
      }
      // pause drawing
      if (e.keyCode === 32) isDrawing = !isDrawing;
      // clear canvas - doesn't restart yet
      if (e.keyCode === 27) {
        clearCanvas(cx, canvas);
        start();
      }
    }

    const start = () => {
      coords = { x: size.w / 2, y: size.h / 2 };
      directionChoice = 'right';
      renderFrame(0);
    }

    start();
    window.addEventListener('keydown', handler, true);
}

export default d20170803;
