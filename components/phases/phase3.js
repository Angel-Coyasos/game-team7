import { Phase } from './phase.js'

export class Phase3 extends Phase {

  create() {
    this.bricks = this.relatedScene.physics.add.staticGroup();

    this.bricks.create(80, 150, 'planetVento');
    this.bricks.create(400, 300, 'planetGreen');
    this.bricks.create(250, 80, 'planetBlue');
    this.bricks.create(250, 250, 'planetCold');
    this.bricks.create(300, 180, 'planetNavi');

    this.bricks.create(720, 150, 'planetMorado');
    this.bricks.create(400, 40, 'planetOrange');
    this.bricks.create(600, 80, 'planetPurple');
    this.bricks.create(600, 250, 'planetRed');
    this.bricks.create(500, 180, 'planetRoto');

    this.fixedBricks = this.relatedScene.physics.add.staticGroup();
    this.fixedBricks.create(400, 180, 'planetTitanium');
    this.fixedBricks.create(40, 300, 'planetTitanium');
    this.fixedBricks.create(770, 300, 'planetTitanium');
    this.fixedBricks.create(100, 300, 'planetTitanium');
    this.fixedBricks.create(710, 300, 'planetTitanium');
    this.fixedBricks.create(140, 350, 'planetTitanium');
    this.fixedBricks.create(670, 350, 'planetTitanium');

    this.configureColisions();
    this.configureColisionsFixed();

  }
}