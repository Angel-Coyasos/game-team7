import { Phase } from './phase.js'

export class Phase2 extends Phase {

  create() {
    this.bricks = this.relatedScene.physics.add.staticGroup();

    this.bricks.create(455, 315, 'planetAro');
    this.bricks.create(395, 265, 'planetGreen');
    this.bricks.create(505, 265, 'planetOrange');
    this.bricks.create(545, 200, 'planetRed');
    this.bricks.create(450, 200, 'planetVento');
    this.bricks.create(355, 200, 'planetCold');
    this.bricks.create(310, 135, 'planetRoto');
    this.bricks.create(400, 135, 'planetVento');
    this.bricks.create(490, 135, 'planetRed');
    this.bricks.create(590, 135, 'planetOrange');
    this.bricks.create(360, 70, 'planetGreen');
    this.bricks.create(530, 70, 'planetRoto');
    this.bricks.create(170, 120, 'planetCold');
    this.bricks.create(730, 120, 'planetCold');

    this.fixedBricks = this.relatedScene.physics.add.staticGroup();
    this.fixedBricks.create(90, 200, 'planetTitanium');
    this.fixedBricks.create(820, 200, 'planetTitanium');
    this.fixedBricks.create(240, 200, 'planetTitanium');
    this.fixedBricks.create(660, 200, 'planetTitanium');
    this.fixedBricks.create(380, 360, 'planetTitanium');
    this.fixedBricks.create(540, 360, 'planetTitanium');
    this.fixedBricks.create(450, 30, 'planetTitanium');

    this.configureColisions();
    this.configureColisionsFixed();
  }
}