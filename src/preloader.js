GBJam.Preloader = function (game) {

    this.background = null;
    this.preloadBar = null;

    this.ready = false;

};

GBJam.Preloader.prototype = {

    preload: function () {

        this.background = this.add.sprite(0, 0, 'mainBackground');
        this.progressBackground = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'progressBackground');
        this.progressBar = this.add.sprite(20, this.game.world.centerY + 4, 'progressBar');
        this.progressBackground.anchor.setTo(0.5,0.5);
        this.progressBar.anchor.setTo(0,0.5);

        this.load.setPreloadSprite(this.progressBar);

        this.load.image('logo', './bin/sprites/logo.png');
        this.load.image('startInfo', './bin/sprites/startInfo.png');
        this.load.image('menuDeco', './bin/sprites/menuDeco.png');

        this.load.audio('titleMusic', ['./bin/audio/bgm.mp3']);
        this.load.bitmapFont('font', './bin/fonts/font.png', './bin/fonts/font.fnt');

        this.load.image('ball', './bin/sprites/ball.png');
        this.load.image('launcherWall', './bin/sprites/launcherWall.png');
        this.load.image('paddle', './bin/sprites/paddle.png');
        this.load.image('brick', './bin/sprites/brick.png');
        this.load.image('brick2', './bin/sprites/brick2.png');
        this.load.image('particle', './bin/sprites/particle.png');
        this.load.image('gravityBar', './bin/sprites/gravityBar.png');

        this.load.audio('hit', ['./bin/audio/hit.mp3']);
        this.load.audio('noEnergy', ['./bin/audio/noEnergy.mp3']);
        this.load.audio('crash', ['./bin/audio/crash.mp3']);

    },

    create: function () {

        this.progressBar.cropEnabled = false;

    },

    update: function () {

        if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
        {
            this.ready = false;
            this.game.state.start('MainMenu');
        }

    }

};