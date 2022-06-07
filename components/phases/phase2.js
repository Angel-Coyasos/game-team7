import { Phase } from './phase.js'

export class Phase2 extends Phase {

  create() {
    this.bricks = this.relatedScene.physics.add.staticGroup();

    this.bricks.create(400, 315, 'planetAro');
    this.bricks.create(345, 265, 'planetGreen');
    this.bricks.create(455, 265, 'planetOrange');
    this.bricks.create(495, 200, 'planetRed');
    this.bricks.create(400, 200, 'planetVento');
    this.bricks.create(305, 200, 'planetCold');
    this.bricks.create(260, 135, 'planetRoto');
    this.bricks.create(350, 135, 'planetVento');
    this.bricks.create(440, 135, 'planetRed');
    this.bricks.create(540, 135, 'planetOrange');
    this.bricks.create(310, 70, 'planetGreen');
    this.bricks.create(480, 70, 'planetRoto');
    this.bricks.create(120, 120, 'planetCold');
    this.bricks.create(680, 120, 'planetCold');

    this.fixedBricks = this.relatedScene.physics.add.staticGroup();
    this.fixedBricks.create(40, 200, 'planetTitanium');
    this.fixedBricks.create(770, 200, 'planetTitanium');
    this.fixedBricks.create(190, 200, 'planetTitanium');
    this.fixedBricks.create(610, 200, 'planetTitanium');
    this.fixedBricks.create(330, 360, 'planetTitanium');
    this.fixedBricks.create(490, 360, 'planetTitanium');
    this.fixedBricks.create(400, 30, 'planetTitanium');

    this.configureColisions();
    this.configureColisionsFixed();
  }
}