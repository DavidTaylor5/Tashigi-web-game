class Tashigi {
    constructor(game, aniNumb, dirNumb, canvasX, canvasY) {
        this.game = game;
        this.aniNumb = aniNumb;
        this.dirNumb = dirNumb;

        this.x = canvasX;
        this.y = canvasY;
        this.speed = 75;

        this.state = 0; // idle = 0, running = 1, horizontalSwing = 2, verticalSwing = 3, airSlash = 4; speedSlash = 5; swordButt = 6;
        this.facing = 0; // left = 0, right = 1
        this.dead = false; 
        this.health = 100; //probably need a health bar?

        // tashigi's animations -> a list of lists? [action][left/right]
        this.animations = [];
        this.loadAnimations();

        this.animator = this.animations[this.aniNumb][this.dirNumb];//I might need a loop boolean?
    };

    update() {
        if(this.aniNumb == 1 && this.dirNumb == 0){
            this.x -= this.speed*this.game.clockTick;
            if(this.x < -58){
             this.x = 1050;
            }
        } else if(this.aniNumb == 1 && this.dirNumb == 1){
            this.x += this.speed*this.game.clockTick;
            if(this.x > 1050){
             this.x = -58;
            }
        } else if(this.aniNumb == 5 && this.dirNumb == 0){
             if(this.animator.currentFrame() == 3 || this.animator.currentFrame() == 4 || this.animator.currentFrame() == 5){
                 this.x -= this.speed*this.game.clockTick*6;
             }
             if(this.x < -58){
                 this.x = 1050;
             }
        } else if(this.aniNumb ==5 && this.dirNumb ==1){
             if(this.animator.currentFrame() == 3 || this.animator.currentFrame() == 4 || this.animator.currentFrame() == 5){
                this.x += this.speed*this.game.clockTick*6;
            }
            if(this.x > 1050){
                 this.x = -58;
             }
         } else {
            //else do nothing, stand in same place (? continue; breaks code for some reason.)
        };
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);

        // if(this.dead){

        // } else {
        //     this.animations[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y);
        // };
    };
//BB -> bounding boxes.
    loadAnimations() {
        //first I gotta set up the list of lists.
        for (var state = 0; state < 7;  state++) { //6 possible states
            this.animations.push([]);
            for (let index = 0; index < 2; index++) { //facing either right or left
                this.animations[state].push([]);
            };
        };

        //idle left
        this.animations[0][0] = new Animator(ASSET_MANAGER.getAsset("./Tashigi-idle.png"), 0, 0, 44, 70, 3, .5, false);
        //idle right
        this.animations[0][1] = new Animator(ASSET_MANAGER.getAsset("./Tashigi-idle.png"), 0, 0, 44, 70, 3, .5, true);

        // put new animator for each state / orientation into each array in correct place.
        //tashigi walk left
        this.animations[1][0] = new Animator(ASSET_MANAGER.getAsset("./Tashigi-walking.png"), 0, 0, 48, 58, 6, 0.2, false); //if this.x < -58 -> this.x = 1050 += speed 75?
        //tashigi walk right
        this.animations[1][1] =  new Animator(ASSET_MANAGER.getAsset("./Tashigi-walking-right.png"), 10, 0, 48, 58, 6, 0.2, false); //if this.x > 1050 -> this.x = -58 -=

        //horizontal slash left
        this.animations[2][0] = new Animator(ASSET_MANAGER.getAsset("./Tashigi-hori-slash.png"), 10, 0, 88, 58, 5, 0.2, false);
        //horizontal slash right
        this.animations[2][1] = new Animator(ASSET_MANAGER.getAsset("./Tashigi-hori-slash-right.png"), 24, 0, 88, 58, 5, 0.2, false);

        //vertical slash left
        this.animations[3][0] = new Animator(ASSET_MANAGER.getAsset("./Tashigi-vertical.png"), 0, 0, 94, 70, 5, .1, false);
        //vertical slash right
        this.animations[3][1] = new Animator(ASSET_MANAGER.getAsset("./Tashigi-vertical-right.png"), 18, 0, 94, 70, 5, .1, false);

        // upslash
        this.animations[4][0] = new Animator(ASSET_MANAGER.getAsset("./Tashigi-upslash.png"), 200, 0, 110, 88, 9, .1, false);
        //upslash -right
        this.animations[4][1] = new Animator(ASSET_MANAGER.getAsset("./Tashigi-upslash.png"), 200, 0, 110, 88, 9, .1, true);

        //speed-slash
        this.animations[5][0] = new Animator(ASSET_MANAGER.getAsset("./Tashigi-speedslash.png"), 60, 0, 104, 88, 11, .1, false);
        //speed-slash-right
        this.animations[5][1] = new Animator(ASSET_MANAGER.getAsset("./Tashigi-speedslash.png"), 60, 0, 104, 88, 11, .1, true);

        //sheath-strike-right
        this.animations[6][0] = new Animator(ASSET_MANAGER.getAsset("./Tashigi-sheath-strike.png"), 80, 0, 80, 88, 4, .2, true);
        // sheath-strike-right
        this.animations[6][1] = new Animator(ASSET_MANAGER.getAsset("./Tashigi-sheath-strike.png"), 80, 0, 80, 88, 4, .2, false);

        //dead animation?


    };
};