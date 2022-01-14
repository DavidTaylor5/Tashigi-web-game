class Jango {
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

        this.animations = [];
        this.loadAnimations();

        this.animator = this.animations[this.aniNumb][this.dirNumb];//I might need a loop boolean?
    };

    diceRoll(max) { //max is inclusive
        //Math.random() function returns floating-point random number in the range 0 to less than 1
        //walk update
        //walk towards tashigi (3 chances)
        //walk backwards (2 chances)
        //walk vertical -> depends on where he is on the scene.
        //attack update
        //idle (3 chances)
        //hypnotize (1 chance)
        //throw starts 4)
        return Math.floor(Math.random() * (max+1)); //math.random will never produce a 1 //equal changes
    };

    update() {

        //DYNAMIC MOVEMENT / ANIMATIONS
        // if(this.game.left){ //this appear to be working!
        //     this.x -= this.speed*this.game.clockTick;
        //     console.log("I have been told to go left!"); //add animations?
        // };

        // if(this.game.right){
        //     this.x += this.speed*this.game.clockTick;
        //     console.log("I have been told to go right!");
        // };

        // if(this.game.up){
        //     this.y -= this.speed*this.game.clockTick;
        //     console.log("I have been told to go up!");
        // };

        // if(this.game.down){
        //     this.y += this.speed*this.game.clockTick;
        //     console.log("I have been told to go down!");
        // };

        //if(this.game.ac)
        //if(this.game.keys['a'])

        //STRICTLY for ANIMATION SHOWCASE
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
         } else {
            //else do nothing, stand in same place (? continue; breaks code for some reason.)
        };

        //STRICTLY FOR ANIMATION SHOWCASE //action 5 should also have special animation boost... attach it to one time press key j or whatever
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
        for (var state = 0; state < 4;  state++) { //4 possible states
            this.animations.push([]);
            for (let index = 0; index < 2; index++) { //facing either right or left
                this.animations[state].push([]);
            };
        };


        //idle left
        this.animations[0][0] = new Animator(ASSET_MANAGER.getAsset("./docs/Jango-idle.png"), 0, 0, 36, 64, 4, .3, false);
        //idle right
        this.animations[0][1] = new Animator(ASSET_MANAGER.getAsset("./docs/Jango-idle.png"), 0, 0, 36, 64, 4, .3, true);

        //walk left
        this.animations[1][0] = new Animator(ASSET_MANAGER.getAsset("./docs/Jango-walk.png"), 20, 0, 54, 64, 9, .3, true);
        //walk right
        this.animations[1][1] = new Animator(ASSET_MANAGER.getAsset("./docs/Jango-walk.png"), 20, 0, 54, 64, 9, .3, false);

        //hypnotize left
        this.animations[2][0] = new Animator(ASSET_MANAGER.getAsset("./docs/Jango-hypnotize.png"), 50, 0, 110, 78, 5, .2, false);
        //hypnotize right
        this.animations[2][1] = new Animator(ASSET_MANAGER.getAsset("./docs/Jango-hypnotize.png"), 50, 0, 110, 78, 5, .2, true);
        //dead animation?

        //throw left
        this.animations[3][0] = new Animator(ASSET_MANAGER.getAsset("./docs/Jango-throw.png"), 66, 0, 54, 70, 10, .2, false);
        //throw right
        this.animations[3][1] = new Animator(ASSET_MANAGER.getAsset("./docs/Jango-throw.png"), 66, 0, 54, 70, 10, .2, true);



    };
};