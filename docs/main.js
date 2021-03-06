const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./docs/Tashigi-walking.png");
ASSET_MANAGER.queueDownload("./docs/Tashigi-walking-right.png");
ASSET_MANAGER.queueDownload("./docs/Tashigi-hori-slash.png");
ASSET_MANAGER.queueDownload("./docs/Tashigi-hori-slash-right.png");
ASSET_MANAGER.queueDownload("./docs/Tashigi-vertical.png");
ASSET_MANAGER.queueDownload("./docs/Tashigi-vertical-right.png");
ASSET_MANAGER.queueDownload("./docs/Tashigi-upslash.png");
ASSET_MANAGER.queueDownload("./docs/Tashigi-upslash-right.png");
ASSET_MANAGER.queueDownload("./docs/Tashigi-speedslash.png");
ASSET_MANAGER.queueDownload("./docs/Tashigi-sheath-strike.png");
ASSET_MANAGER.queueDownload("./docs/Tashigi-idle.png");

ASSET_MANAGER.queueDownload("./docs/Jango-hypnotize.png");
ASSET_MANAGER.queueDownload("./docs/Jango-throw.png");
ASSET_MANAGER.queueDownload("./docs/Jango-walk.png");
ASSET_MANAGER.queueDownload("./docs/Jango-idle.png");


ASSET_MANAGER.queueDownload("./docs/Tashigi.png");

//I had to adjust all of my links so that it would work in github pages.

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	//ASSET_MANAGER.autoRepeat("theme music");

	gameEngine.addEntity(new Tashigi(gameEngine, 1, 0, 0, 0));
	gameEngine.addEntity(new Tashigi(gameEngine, 1, 1, 0, 100)); //okay I can now create multiple tashigis!
	gameEngine.addEntity(new Tashigi(gameEngine, 2, 0, 350, 600)); //okay I can now create multiple tashigis!
	gameEngine.addEntity(new Tashigi(gameEngine, 2, 1, 650, 650)); //okay I can now create multiple tashigis!
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

	gameEngine.addEntity(new Jango(gameEngine, 1, 0, 300, 0));
	gameEngine.addEntity(new Jango(gameEngine, 1, 1, 300, 100));
	gameEngine.addEntity(new Jango(gameEngine, 0, 0, 300, 300));
	gameEngine.addEntity(new Jango(gameEngine, 0, 1, 250, 250));
	gameEngine.addEntity(new Jango(gameEngine, 2, 0, 64, 424));
	gameEngine.addEntity(new Jango(gameEngine, 2, 1, 300, 424));
	gameEngine.addEntity(new Jango(gameEngine, 3, 0, 300, 64));
	gameEngine.addEntity(new Jango(gameEngine, 3, 1, 250, 64));

	gameEngine.init(ctx);

	gameEngine.start();
});
