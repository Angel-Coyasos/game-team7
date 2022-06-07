export class backgroundLvel {
    constructor(scene, initialLevel) {
      this.relatedScene = scene;
      this.initialLevel = initialLevel;
    }
  
    create() {

    this.phase1Image = this.add.image(400, 250, 'backgroundPhase1');
    this.phase1Image.visible = true;
    this.phase2Image = this.add.image(400, 250, 'backgroundPhase2');
    this.phase2Image.visible = false;
    this.phase3Image = this.add.image(400, 250, 'backgroundPhase3');
    this.phase3Image.visible = false;
    this.phase4Image = this.add.image(400, 250, 'backgroundPhase4');
    this.phase4Image.visible = false;
    this.phase5Image = this.add.image(400, 250, 'backgroundPhase5');
    this.phase5Image.visible = false;
    this.phase6Image = this.add.image(400, 250, 'backgroundPhase6');
    this.phase6Image.visible = false;
    }
  
   preload(){
     
   }
  }