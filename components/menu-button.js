export class MenuButton {
  constructor(scene) {
    this.relatedScene = scene;
  }

  preload() {
    this.relatedScene.load.image('continueButton', 'images/salirButton.png');
    this.relatedScene.load.image('replayButton', 'images/replayButton.png');
  }

  create() {
    this.startButton = this.relatedScene.add.image(450, 450, 'continueButton').setInteractive();

    this.startButton.on('pointerdown', () => {
      this.relatedScene.scene.start('inicio');
    });

    this.replayButton = this.relatedScene.add.image(450, 380, 'replayButton').setInteractive();

    this.replayButton.on('pointerdown', () => {
      this.relatedScene.scene.start('game');
    });
  }
}