import { Phase } from './phase.js'

export class Phase6 extends Phase {

  create() {
    this.bricks = this.relatedScene.physics.add.staticGroup({
      key: ['planetCold', 'planetAro', 'planetCold', 'planetAro', 'planetCold'],
      frameQuantity: 10,
      gridAlign: {
        width: 10,
        height: 5,
        cellWidth: 70,
        cellHeight: 50,
        x: 135,
        y: 70
      }
    });

    this.bricks.getChildren().forEach( (element, index) => {
      if ((index >= 10 && index < 20) || (index >= 30 && index < 40)) {
        index++;
      }
      if(((index+1) % 2) == 0) {
        element.disableBody(true, true);
      }
    });

    this.configureColisions();

  }
}