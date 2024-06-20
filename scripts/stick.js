export default class Stick {

    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.length = 0;

        this.speed = 5;

        this.stretching = false;
        this.stretchStarted = false;
        this.active = true;
        this.rotation = 0;

        this.blocksPassed = 1;

    }

    draw(ctx) {
        ctx.save();

        ctx.translate(this.x, this.y + this.length);
        const rotationRadians = this.rotation * (Math.PI / 180);
        ctx.rotate(rotationRadians);

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -this.length);
        ctx.stroke()

        ctx.restore();
    }

    update() {
        // this.y = this.y+this.length


        if (this.stretching) {
            this.length += this.speed;
            this.y -= this.speed;
        }

        if (!this.stretching && this.stretchStarted) {
            if (this.rotation < 90) {
                this.rotation += this.speed;
            }
            else {
                this.active = false;
            }
        }

        
    }

}