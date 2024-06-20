export default class Player {

    constructor(x, y, xOffset, width, height, state) {

        this.width = width;
        this.height = height;

        this.x = x;
        this.y = y;

        this.xOffset = xOffset;

        this.speed = 5;

        this.state = state;

        this.image = new Image();
        this.image.src = '../assets/stick-hero.png';
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update(currentBlock, prevBlock, currentStick, prevStick) {
        this.xOffset = (currentBlock.width - this.width) - 5;

        if (prevStick) {

            if (this.state.gameover) {
                this.y += this.speed;
                if (prevStick.rotation < 180) {
                    prevStick.rotation += prevStick.speed;
                }
            }


            if ((this.x < prevStick.x + prevStick.length && (!prevStick.active && this.x <= currentBlock.x)) || (this.x >= currentBlock.x && this.x < currentBlock.x + this.xOffset)) {
                this.x += this.speed;
            }
            else {
                if ((this.x > currentBlock.x && this.x < currentBlock.x + currentBlock.width) && (prevStick.x + prevStick.length) < (currentBlock.x + currentBlock.width)) {
                    this.x = currentBlock.x + this.xOffset;
                }
            }


            if ((this.x < currentBlock.x && this.x >= prevStick.x + prevStick.length) ) {
                this.state['gameover'] = true;
            }

            if ((this.x === currentBlock.x + this.xOffset) && (prevStick.x + prevStick.length < currentBlock.x + currentBlock.width)) {
                this.state['waiting'] = true;
            }
            else {
                this.state['waiting'] = false;
            }
        }




    }

}