import { Phase } from './phase.js'

export class Phase1 extends Phase {

  create() {
    this.bricks = this.relatedScene.physics.add.staticGroup({
      key: ['planetWhite', 'planetBlue', 'planetCold', 'planetGreen', 'planetMorado', 'planetOrange', 'planetPurple', 'planetRed', 'planetRoto', 'planetVento'],
      frameQuantity: 1,
      gridAlign: {
        width: 5,
        height: 4,
        cellWidth: 150,
        cellHeight: 150,
        x: 135,
        y: 150
      }
    });

    this.fixedBricks = this.relatedScene.physics.add.staticGroup();
    this.fixedBricks.create(320, 180, 'planetTitanium');
    this.fixedBricks.create(480, 180, 'planetTitanium');
    this.fixedBricks.create(170, 180, 'planetTitanium');
    this.fixedBricks.create(630, 180, 'planetTitanium');

    this.configureColisions();
    this.configureColisionsFixed();
  }
}