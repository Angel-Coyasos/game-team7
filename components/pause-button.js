export class PauseButton {
    constructor(scene) {
      this.relatedScene = scene;
    }
  
    create() {
      this.pauseButton = this.relatedScene.add.image(450, 25, 'pauseButton').setInteractive();
  
      this.pauseButton.on('pointerdown', () => {  
        this.relatedScene.scene.start('menu');
      });
  
    }
       
    
  }