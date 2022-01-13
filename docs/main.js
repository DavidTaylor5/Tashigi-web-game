const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Tashigi-walking.png");
ASSET_MANAGER.queueDownload("./Tashigi-walking-right.png");
ASSET_MANAGER.queueDownload("./Tashigi-hori-slash.png");
ASSET_MANAGER.queueDownload("./Tashigi-hori-slash-right.png");
ASSET_MANAGER.queueDownload("./Tashigi-vertical.png");
ASSET_MANAGER.queueDownload("./Tashigi-vertical-right.png");
ASSET_MANAGER.queueDownload("./Tashigi-upslash.png");
ASSET_MANAGER.queueDownload("./Tashigi-upslash-right.png");
ASSET_MANAGER.queueDownload("./Tashigi-speedslash.png");
ASSET_MANAGER.queueDownload("./Tashigi-sheath-strike.png");
ASSET_MANAGER.queueDownload("./Tashigi-idle.png");



ASSET_MANAGER.queueDownload("./Tashigi.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Tashigi(gameEngine, 1, 0, 0, 0));
	gameEngine.addEntity(new Tashigi(gameEngine, 1, 1, 0, 100)); //okay I can now create multiple tashigis!
	gameEngine.addEntity(new Tashigi(gameEngine, 5, 1, 0, 550));  //fixed flicker by restoring canvas after scale call.
	gameEngine.addEntity(new Tashigi(gameEngine, 5, 0, 0, 400)); 
	gameEngine.addEntity(new Tashigi(gameEngine, 3, 0, 0, 250));
	gameEngine.addEntity(new Tashigi(gameEngine, 4, 0, 200, 250));
	gameEngine.addEntity(new Tashigi(gameEngine, 3, 1, 0, 100));
	gameEngine.addEntity(new Tashigi(gameEngine, 4, 1, 200, 100));
	gameEngine.addEntity(new Tashigi(gameEngine, 6, 1, 500, 250));
	gameEngine.addEntity(new Tashigi(gameEngine, 6, 0, 750, 75));
	gameEngine.addEntity(new Tashigi(gameEngine, 0, 1, 800, 250)); // fixed!
	gameEngine.addEntity(new Tashigi(gameEngine, 0, 0, 700, 250));


	gameEngine.init(ctx);

	gameEngine.start();
});
