export class PauseButton {
  constructor(scene) {
    this.relatedScene = scene;
  }

  create() {
    this.pauseButton = this.relatedScene.add.image(400, 25, 'pauseButton').setInteractive();
    this.pauseButton.visible = true;
    this.pauseMenu = this.relatedScene.add.image(400, 250, 'pauseMenu').setInteractive();
    this.pauseMenu.visible = false;

    this.pauseButton.on('pointerdown', () => {  
      this.relatedScene.scene.pause('game');
      this.pauseMenu.visible = true;
    });

    this.pauseMenu.on('pointerdown', () => {
      this.relatedScene.scene.continue('game');

    })
  }
     
  
}