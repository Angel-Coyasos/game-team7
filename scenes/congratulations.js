import { RestartButton } from "../components/restart-button.js";

export class Congratulations extends Phaser.Scene {
  constructor() {
    super({ key: 'congratulations' });
    this.restartButton = new RestartButton(this);
  }

  preload() {
    this.load.image('congratulationsBackground', '../images/congratulations.jpg');
    this.load.image('congratulations', 'images/congratulations.png');
    this.restartButton.preload();
  }
  
  create() {
    this.add.image(400, 250, 'congratulationsBackground');
    this.restartButton.create();
    this.congratsImage = this.add.image(400, 200, 'congratulations');
  }
}