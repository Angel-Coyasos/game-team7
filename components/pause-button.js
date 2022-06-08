export class PauseButton {
  constructor(scene) {
    this.relatedScene = scene;
  }

  preload() {
    this.relatedScene.load.spritesheet('pauseButton', 'images/pausebutton.png', { frameWidth: 190, frameHeight: 49 });
  }

  create() {
    this.startButton = this.relatedScene.add.sprite(400, 30, 'pauseButton').setInteractive();

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