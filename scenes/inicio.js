import { PlayButton } from "../components/play-button.js";

export class Inicio extends Phaser.Scene {
  constructor() {
    super({ key: 'inicio' });
    this.playButton = new PlayButton(this);
  }

  preload() {
    this.load.image('backgroundInit', '../images/brackgroundInit.jpg');
    this.load.image('worldRed', '../images/worldRed.png');
    this.playButton.preload();
  }
  
  create() {
    this.backImage = this.add.image(450, 290, 'backgroundInit');
    this.worlRedImage = this.add.image(450, 350, 'worldRed');
    this.worlRedImage.setScale(0.8)
    this.playButton.create();
  }
}