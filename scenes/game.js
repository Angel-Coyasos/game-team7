import { PhaseConstructor } from '../components/phases/phase-constructor.js';
import { LiveCounter } from '../components/liveCounter.js';
import { PauseButton } from '../components/pause-button.js';

export class Game extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }
  
  init() {
    this.phaseConstructor = new PhaseConstructor(this);
    this.score = 0;
    this.liveCounter = new LiveCounter(this, 5);
    this.PauseButton = new PauseButton(this);
  }

  preload() {
   
    this.load.image('backgroundPhase1', '../images/phase1.jpg');
    this.load.image('backgroundPhase2', '../images/phase2.jpg');
    this.load.image('backgroundPhase3', '../images/phase3.jpg');
    this.load.image('backgroundPhase4', '../images/phase4.webp');
    this.load.image('backgroundPhase5', '../images/phase5.jpg');
    this.load.image('backgroundPhase6', '../images/phase6.jpg');

    this.load.image('pauseButton', '../images/pausebutton.png');
    this.load.image('pauseMenu', '../images/menu2.png');

    this.load.image('platform', '../images/platform.png');
    this.load.image('ball', '../images/ball.png');

    this.load.image('planetTitanium', '../images/planetTitanium.png');
    this.load.image('planetNavi', '../images/planetNavi.png');
    this.load.image('planetAro', '../images/planetAro.png');
    this.load.image('planetBlue', '../images/planetBlue.png');
    this.load.image('planetCold', '../images/planetCold.png');
    this.load.image('planetGreen', '../images/planetGreen.png');
    this.load.image('planetMorado', '../images/planetMorado.png');
    this.load.image('planetOrange', '../images/planetOrange.png');
    this.load.image('planetPurple', '../images/planetPurple.png');
    this.load.image('planetRed', '../images/planetRed.png');
    this.load.image('planetRoto', '../images/planetRoto.png');
    this.load.image('planetVento', '../images/planetVento.png');
    this.load.image('planetWhite', '../images/planetWhite.png');

    this.load.audio('platformimpactsample', '../sounds/platform-impact.ogg');
    this.load.audio('brickimpactsample', '../sounds/brick-impact.ogg');
    this.load.audio('fixedbrickimpactsample', '../sounds/fixed-brick-impact.ogg');
    this.load.audio('gameoversample', '../sounds/gameover.ogg');
    this.load.audio('winsample', '../sounds/you_win.ogg');
    this.load.audio('startgamesample', '../sounds/start-game.ogg');
    this.load.audio('livelostsample', '../sounds/live-lost.ogg');
    this.load.audio('phasechange', '../sounds/phasechange.ogg');

  }


  create() {
    this.physics.world.setBoundsCollision(true, true, true, false);

    this.phase1Image = this.add.image(400, 250, 'backgroundPhase1');
    this.phase1Image.visible = true;
    this.phase2Image = this.add.image(400, 250, 'backgroundPhase2');
    this.phase2Image.visible = false;
    this.phase3Image = this.add.image(400, 250, 'backgroundPhase3');
    this.phase3Image.visible = false;
    this.phase4Image = this.add.image(400, 250, 'backgroundPhase4');
    this.phase4Image.visible = false;
    this.phase5Image = this.add.image(400, 250, 'backgroundPhase5');
    this.phase5Image.visible = false;
    this.phase6Image = this.add.image(400, 250, 'backgroundPhase6');
    this.phase6Image.visible = false;

    this.liveCounter.create();
    
    this.platform = this.physics.add.image(400, 460, 'platform').setImmovable();
    this.platform.body.allowGravity = false;
    this.platform.setCollideWorldBounds(true);
    
    this.cursors = this.input.keyboard.createCursorKeys();
    
    this.ball = this.physics.add.image(385, 430, 'ball');
    this.ball.setScale(1.5);
    this.ball.setBounce(1);
    this.ball.setCollideWorldBounds(true);
    this.ball.setData('glue', true);
    
    this.physics.add.collider(this.ball, this.platform, this.platformImpact, null, this);
    
    this.phaseConstructor.create();
    
    this.scoreText = this.add.text(16, 16, 'PUNTOS: 0', { fontSize: '20px', fill: '#fff', fontFamily: 'verdana, arial, sans-serif' });

    this.platformImpactSample = this.sound.add('platformimpactsample');
    this.brickImpactSample = this.sound.add('brickimpactsample');
    this.fixedBrickImpactSample = this.sound.add('fixedbrickimpactsample');
    this.gameOverSample = this.sound.add('gameoversample');
    this.winSample = this.sound.add('winsample');
    this.startGameSample = this.sound.add('startgamesample');
    this.liveLostSample = this.sound.add('livelostsample');
    this.phaseChangeSample = this.sound.add('phasechange');

    this.PauseButton.create();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.platform.setVelocityX(-500);
      if(this.ball.getData('glue')) {
        this.ball.setVelocityX(-500);
      }
    }
    else if (this.cursors.right.isDown) {
      this.platform.setVelocityX(500);
      if (this.ball.getData('glue')) {
        this.ball.setVelocityX(500);
      }
    }
    else {
      this.platform.setVelocityX(0);
      if (this.ball.getData('glue')) {
        this.ball.setVelocityX(0);
      }
    }

    if (this.ball.y > 500 && this.ball.active) {
      let gameNotFinished = this.liveCounter.liveLost();
      if (!gameNotFinished) {
        this.liveLostSample.play();
        this.setInitialPlatformState();
      }
    }

    if (this.cursors.up.isDown || this.cursors.space.isDown || this.cursors.shift.isDown) {
      if (this.ball.getData('glue')) {
        this.startGameSample.play();
        this.ball.setVelocity(-60, -300);
        this.ball.setData('glue', false);
      }
    }

  }

  platformImpact(ball, platform) {
    this.platformImpactSample.play();
    this.increasePoints(1);
    let relativeImpact = ball.x - platform.x;
    if(relativeImpact > 0) {
      ball.setVelocityX(8 * relativeImpact);
    } else if(relativeImpact < 0) {
      ball.setVelocityX(8 * relativeImpact);
    } else {
      ball.setVelocityX(Phaser.Math.Between(-10, 10))
    }
  }

  brickImpact(ball, brick) {
    this.brickImpactSample.play();
    brick.disableBody(true, true);
    this.increasePoints(10);
    if (this.phaseConstructor.isPhaseFinished()) {
      this.phaseChangeSample.play();
      this.phaseConstructor.nextLevel();
      this.nextBack();
      this.setInitialPlatformState();
    }
  }

  fixedBrickImpact(ball, brick) {
    this.fixedBrickImpactSample.play();
  }

  increasePoints(points) {
    this.score += points;
    this.scoreText.setText('PUNTOS: ' + this.score);
  }

  endGame(completed = false) {
    if(! completed) {
      this.gameOverSample.play();
      this.scene.start('gameover');
    } else {
      this.winSample.play();
      this.scene.start('congratulations');
    }
  }

  setInitialPlatformState() {
    this.liveLostSample.play();
    this.platform.x = 400;
    this.platform.y = 460;
    this.ball.setVelocity(0,0);
    this.ball.x = 385;
    this.ball.y = 430;
    this.ball.setData('glue', true);
  }
  
  nextBack() {
    if (this.phaseConstructor.phases.length == 5) {
      console.log("level 1");
      this.phase1Image.visible = true;
    } else if (this.phaseConstructor.phases.length == 4) {
      console.log("level 2");
      this.phase1Image.visible = false;
      this.phase2Image.visible = true;
    } else if (this.phaseConstructor.phases.length == 3) {
      console.log("level 3");
      this.phase2Image.visible = false;
      this.phase3Image.visible = true;
    } else if (this.phaseConstructor.phases.length == 2) {
      console.log("level 4");
      this.phase3Image.visible = false;
      this.phase4Image.visible = true;
    } else if (this.phaseConstructor.phases.length == 1) {
      console.log("level 5");
      this.phase4Image.visible = false;
      this.phase5Image.visible = true;
    } else if (this.phaseConstructor.phases.length == 0) {
      console.log("level 6");
      this.phase5Image.visible = false;
      this.phase6Image.visible = true;
    }
  }

}