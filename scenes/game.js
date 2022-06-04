export class Game extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  create() {
    this.physics.world.setBoundsCollision(true, true, true, false);
    
    this.add.image(410, 250, 'background');
    
    
    this.platform = this.physics.add.image(400, 460, 'platform').setImmovable();
    this.platform.body.allowGravity = false;
    
    this.cursors = this.input.keyboard.createCursorKeys();
    
    this.ball = this.physics.add.image(385, 430, 'ball');
    
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

    if (this.cursors.up.isDown) {
      if (this.ball.getData('glue')) {
        this.startGameSample.play();
        this.ball.setVelocity(-60, -300);
        this.ball.setData('glue', false);
      }
    }
  }
}