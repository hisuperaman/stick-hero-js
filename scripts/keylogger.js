export function handleTouchInput(canvas, touchMap, game, canvasSize) {
    canvas.addEventListener('mousedown', handleEvent);
    canvas.addEventListener('mouseup', handleEvent);
    canvas.addEventListener('mousemove', handleMouseMove);

    canvas.addEventListener('touchstart', handleTouchStartEvent);
    canvas.addEventListener('touchend', handleTouchEndEvent);


    document.addEventListener('keydown', handleKeyboardEvent);
    document.addEventListener('keyup', handleKeyboardEvent);

    function handleKeyboardEvent(e) {
        const key = e.key;
        touchMap['hold'] = e.type === 'keydown' && key === ' ';

        if (game.gameover && (e.type === 'keydown' && key === ' ')) {
            touchMap['hold'] = false;
            game.reset();
        }
    }



    function handleTouchStartEvent(e) {
        e.preventDefault();

        touchMap['hold'] = true;


        if (game.gameover) {
            let rect = canvas.getBoundingClientRect();
            const touch = e.touches[0];
            let mouseX = touch.clientX - rect.left;
            let mouseY = touch.clientY - rect.top;


            const centerX = canvasSize.width / 2;
            const centerY = canvasSize.height / 2;
            let distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);
            // reset game
            if (distance <= game.gameoverRadius) {
                touchMap['hold'] = false;
                game.reset();
            }
        }
    }
    function handleTouchEndEvent(e) {
        e.preventDefault();

        touchMap['hold'] = false;
    }


    function handleEvent(e) {
        touchMap['hold'] = e.type === 'mousedown' && e.button === 0;

        // handle gameover click to restart
        if (game.gameover) {
            let rect = canvas.getBoundingClientRect();
            let mouseX = e.clientX - rect.left;
            let mouseY = e.clientY - rect.top;

            const centerX = canvasSize.width / 2;
            const centerY = canvasSize.height / 2;
            let distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);
            // reset game
            if (distance <= game.gameoverRadius && e.button === 0) {
                touchMap['hold'] = false;
                game.reset();
            }
        }
    }

    function handleMouseMove(e) {
        if (game.gameover) {
            let rect = canvas.getBoundingClientRect();
            let mouseX = e.clientX - rect.left;
            let mouseY = e.clientY - rect.top;

            const centerX = canvasSize.width / 2;
            const centerY = canvasSize.height / 2;
            let distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);
            // reset game
            if (distance <= game.gameoverRadius) {
                canvas.style.cursor = 'pointer';
            }
            else {
                canvas.style.cursor = 'default';
            }
        }
        else {
            canvas.style.cursor = 'default';
        }
    }

}