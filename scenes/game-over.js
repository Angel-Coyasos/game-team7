import { RestartButton } from "../components/restart-button.js";

export class Gameover extends Phaser.Scene {
  constructor() {
    super({ key: 'gameover' });
    this.restartButton = new RestartButton(this);
  }

  preload() {
    this.load.image('gameover', 'images/gameover.jpg');
    this.restartButton.preload();
  }
  
  create() {
    this.add.image(450, 290, 'gameover');
    this.restartButton.create();
  }
}