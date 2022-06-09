import { Phase } from './phase.js'

export class Phase3 extends Phase {

  create() {
    this.bricks = this.relatedScene.physics.add.staticGroup();

    this.bricks.create(130, 150, 'planetVento');
    this.bricks.create(450, 300, 'planetGreen');
    this.bricks.create(300, 80, 'planetBlue');
    this.bricks.create(300, 250, 'planetCold');
    this.bricks.create(350, 180, 'planetNavi');

    this.bricks.create(450, 40, 'planetOrange');
    this.bricks.create(650, 80, 'planetPurple');
    this.bricks.create(650, 250, 'planetRed');
    this.bricks.create(550, 180, 'planetRoto');
    this.bricks.create(750, 150, 'planetMorado');

    this.fixedBricks = this.relatedScene.physics.add.staticGroup();
    
    this.fixedBricks.create(40, 300, 'planetTitanium');
    this.fixedBricks.create(100, 300, 'planetTitanium');
    this.fixedBricks.create(140, 350, 'planetTitanium');
    this.fixedBricks.create(450, 180, 'planetTitanium');
    this.fixedBricks.create(770, 350, 'planetTitanium');
    this.fixedBricks.create(810, 300, 'planetTitanium');
    this.fixedBricks.create(870, 300, 'planetTitanium');

    this.configureColisions();
    this.configureColisionsFixed();

  }
}