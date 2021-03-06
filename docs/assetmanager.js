class AssetManager {
    constructor() {
        this.successCount = 0;
        this.errorCount = 0;
        this.cache = [];
        this.downloadQueue = [];
    };

    queueDownload(path) {
        console.log("Queueing " + path);
        this.downloadQueue.push(path);
    };

    isDone() {
        return this.downloadQueue.length === this.successCount + this.errorCount;
    };

    downloadAll(callback) {
        if (this.downloadQueue.length === 0) setTimeout(callback, 10);
        for (let i = 0; i < this.downloadQueue.length; i++) {
            const img = new Image();

            const path = this.downloadQueue[i];
            var ext = path.substring(path.length - 3);
            
            if(ext === 'png'){
                console.log(path);

                img.addEventListener("load", () => {
                    console.log("Loaded " + img.src);
                    this.successCount++;
                if (this.isDone()) callback();
                });

                img.addEventListener("error", () => {
                    console.log("Error loading " + img.src);
                    this.errorCount++;
                    if (this.isDone()) callback();
                });

                img.src = path;
                this.cache[path] = img;
            } else if(ext === 'mp3'){
                var aud = new Audio();
                aud.addEventListener("loadeddata", function() {
                    console.log("Loaded " + this.src);
                    that.successCount++;
                    if(that.isDone()) callback();
                });

                aud.addEventListener("error", function () {
                    console.log("Error loading " + this.src);
                    that.errorCount++;
                    if(that.isDone()) callback();
                });

                aud.addEventListener("ended", function() {
                    aud.pause();
                    aud.currentTime = 0; //ready to run audio again.
                });

                aud.src = path;
                aud.load();

                this.cache[path] = aud;

            } else {
                console.log("Error loading, extention was neither jpg or png!");
            }

            
        }
    };

    getAsset(path) {
        return this.cache[path];
    };

    playAsset(path) {
        let audio = this.cache[path];
        audio.currentTime = 0;
        audio.play();
    };

    autoRepeat(path) {
        var aud = this.cache[path];
        aud.addEventListener("ended", function(){ //listeners for an event will fire off in added order.
            aud.play();
        });
    };
};

