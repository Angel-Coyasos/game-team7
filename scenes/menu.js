import { MenuButton } from "../components/menu-button.js";
export class Menu extends Phaser.Scene {
  constructor() {
    super({ key: 'menu' });
    this.MenuButton = new MenuButton(this);
  }

  preload() {
    this.load.image('backgroundMenu', '../images/backgroundMenu.webp');
    this.MenuButton.preload();
  }
  
  create() {
    this.add.image(450, 290, 'backgroundMenu');
    this.MenuButton.create();
  }
}