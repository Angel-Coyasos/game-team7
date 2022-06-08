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
        x: 90,
        y: 150
      }
    });

    this.fixedBricks = this.relatedScene.physics.add.staticGroup();
    this.fixedBricks.create(165, 230, 'planetTitanium');
    this.fixedBricks.create(305, 230, 'planetTitanium');
    this.fixedBricks.create(445, 230, 'planetTitanium');
    this.fixedBricks.create(585, 230, 'planetTitanium');
    this.fixedBricks.create(725, 230, 'planetTitanium');

    this.fixedBricks.create(90, 70, 'planetTitanium');
    this.fixedBricks.create(235, 70, 'planetTitanium');
    this.fixedBricks.create(375, 70, 'planetTitanium');
    this.fixedBricks.create(515, 70, 'planetTitanium');
    this.fixedBricks.create(655, 70, 'planetTitanium');

    this.configureColisions();
    this.configureColisionsFixed();



  }
}