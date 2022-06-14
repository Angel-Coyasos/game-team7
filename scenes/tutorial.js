import { PlayButton } from "../components/play-button";


export class Tutorial extends Phaser.Scene {
  constructor() {
    super({ key: 'tutorial' });
    this.restartButton = new PlayButton(this);

  }

  preload() {
    this.load.image('backgroundInit', '../images/brackgroundInit.jpg');
     this.restartButton.preload();
  }
  
  create() {
    this.add.image(400, 250, 'backgroundInit');
    this.restartButton.create();
  }
}