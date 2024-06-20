import Game from './game.js';
import { handleTouchInput } from './keylogger.js';


const touchMap = {};
document.addEventListener('DOMContentLoaded', (e) => {

    const canvas = document.getElementById('myCanvas');


    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const game = new Game(canvas, ctx, 60, touchMap);
    window.onload = ()=>{
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        game.start()
    }

    handleTouchInput(canvas, touchMap, game);
});