import { Phase } from './phase.js'

export class Phase5 extends Phase {

  create() {
    this.bricks = this.relatedScene.physics.add.staticGroup({
      key: ['planetRed'],
      frameQuantity: 8,
      gridAlign: {
        width: 8,
        height: 4,
        cellWidth: 90,
        cellHeight: 70,
        x: 140,
        y: 150
      }
    });

    this.fixedBricks = this.relatedScene.physics.add.staticGroup();
    this.fixedBricks.create(215, 230, 'planetTitanium');
    this.fixedBricks.create(355, 230, 'planetTitanium');
    this.fixedBricks.create(495, 230, 'planetTitanium');
    this.fixedBricks.create(635, 230, 'planetTitanium');
    this.fixedBricks.create(775, 230, 'planetTitanium');

    this.fixedBricks.create(140, 70, 'planetTitanium');
    this.fixedBricks.create(285, 70, 'planetTitanium');
    this.fixedBricks.create(425, 70, 'planetTitanium');
    this.fixedBricks.create(565, 70, 'planetTitanium');
    this.fixedBricks.create(705, 70, 'planetTitanium');

    this.configureColisions();
    this.configureColisionsFixed();



  }
}