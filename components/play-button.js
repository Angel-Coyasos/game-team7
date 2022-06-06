export class PlayButton {
  constructor(scene) {
    this.relatedScene = scene;
  }

  preload() {
    this.relatedScene.load.spritesheet('playButton', 'images/playbutton.png', { frameWidth: 190, frameHeight: 49 });
  }

  create() {
    this.startButton = this.relatedScene.add.sprite(400, 400, 'playButton').setInteractive();

    this.startButton.on('pointerover', () => {
      this.startButton.setFrame(1);
    });
    this.startButton.on('pointerout', () => {
      this.startButton.setFrame(0);
    });
    this.startButton.on('pointerdown', () => {
      this.relatedScene.scene.start('game');
    });
  }
}