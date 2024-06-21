import Game from './game.js';
import { handleTouchInput } from './keylogger.js';


const touchMap = {};
document.addEventListener('DOMContentLoaded', (e) => {

    const canvas = document.getElementById('myCanvas');


    const ctx = canvas.getContext('2d');

    const canvasSize = {};

    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;

        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = width * dpr;
        canvas.height = height * dpr;

        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        canvasSize['width'] = width;
        canvasSize['height'] = height;

        ctx.scale(dpr, dpr)
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const game = new Game(canvas, ctx, 60, touchMap, canvasSize);
    window.onload = ()=>{
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        game.start()
    }

    handleTouchInput(canvas, touchMap, game, canvasSize);
});