import { PlayButton } from "../components/play-button.js";

export class Inicio extends Phaser.Scene {
  constructor() {
    super({ key: 'inicio' });
    this.playButton = new PlayButton(this);
  }

  preload() {
    this.load.image('backgroundInit', '../images/brackgroundInit.jpg');
    this.load.image('inicio', 'images/congratulations.png');
    this.playButton.preload();
  }
  
  create() {
    this.backImage = this.add.image(400, 250, 'backgroundInit');
    this.backImage.setScale(1)
    this.add.image(410, 250, 'inicio'); //imagene que diga destruye mundos
    this.playButton.create();
  }
}