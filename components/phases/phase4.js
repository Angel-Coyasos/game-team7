import { Phase } from './phase.js'

export class Phase4 extends Phase {

  create() {
    this.bricks = this.relatedScene.physics.add.staticGroup({
      key: ['planetGreen', 'planetRed', 'planetPurple', 'planetWhite'],
      frameQuantity: 10,
      gridAlign: {
        width: 10,
        height: 4,
        cellWidth: 70,
        cellHeight: 70,
        x: 140,
        y: 100
      }
    });

    this.fixedBricks = this.relatedScene.physics.add.staticGroup();
    this.fixedBricks.create(35, 410, 'planetTitanium');
    this.fixedBricks.create(875, 410, 'planetTitanium');

    this.configureColisions();
    this.configureColisionsFixed();

  }
}