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
        x: 185,
        y: 150
      }
    });

    this.fixedBricks = this.relatedScene.physics.add.staticGroup();
    this.fixedBricks.create(220, 180, 'planetTitanium');
    this.fixedBricks.create(370, 180, 'planetTitanium');
    this.fixedBricks.create(530, 180, 'planetTitanium');
    this.fixedBricks.create(680, 180, 'planetTitanium');

    this.configureColisions();
    this.configureColisionsFixed();
  }

}