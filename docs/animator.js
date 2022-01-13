class Animator {
    constructor(spriteSheet, xStart, yStart, width, height, frameCount, frameDuration, reverse) { //loop
        Object.assign(this, {spriteSheet, xStart, yStart, width, height, frameCount, frameDuration, reverse});


        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;
        if(this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime; //makes it loop?
        const frame = this.currentFrame();

        if(this.reverse){ //if I should draw this in reverse.
            ctx.save();
            ctx.scale(-1, 1); //issue with flipping canvas...
            ctx.drawImage(this.spriteSheet,
                this.xStart + this.width*frame, this.yStart,
                this.width, this.height,
                -x-this.width*2, y, 
                this.width*2, this.height*2)
            ctx.restore();
        } else {
            ctx.drawImage(this.spriteSheet, 
            this.xStart + this.width*frame, this.yStart, 
            this.width, this.height,
            x, y, 
            this.width*2, this.height*2);
        };
    };

        

    currentFrame() {
        return Math.floor(this.elapsedTime/ this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };


};