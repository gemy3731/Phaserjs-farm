import { Scene } from "phaser";

export class MainScene extends Scene {
  constructor() {
    super("MainScene");
  }

  create() {
    this.successSound = this.sound.add('successSound')
    this.failSound = this.sound.add('failSound')
     this.bg = this.add.image(0, 0, "background");
     this.bg.setOrigin(0, 0);
     this.bg.setDisplaySize(this.scale.width, this.scale.height);
     this.cursor = this.add.image(0, 0, "cursor").setScale(0.015).setOrigin(0,0).setDepth(100);
     this.input.setDefaultCursor("none");
     this.startName = this.add.image(980,180,'startName').setScale(0.2)
     this.startText = this.add.image(980,400,'startText').setScale(0.15)
     this.seed = this.add.image(880,550,'seed').setScale(0.08)
     this.brownGround = this.add.image(1030,550,'brownGround').setScale(0.8)
     this.plantedBrownGround = [];
    // FirstLine
     this.add.image(346,277,'ground1').setScale(0.4)
     this.add.image(379,294,'ground1').setScale(0.4)
     this.add.image(412,311,'ground1').setScale(0.4)
     this.add.image(445,328,'ground1').setScale(0.4)
     this.add.image(478,345,'ground1').setScale(0.4)

     this.add.image(511,362,'ground2').setScale(0.4)
     this.add.image(544,379,'ground1').setScale(0.4)
     this.add.image(544,399,'tree1').setScale(0.4).setOrigin(0.5,1).setDepth(1)
     this.add.image(577,396,'ground1').setScale(0.4)
     this.add.image(610,413,'ground1').setScale(0.4)
     this.add.image(615,433,'tree2').setScale(0.4).setOrigin(0.5,1).setDepth(2)
     this.add.image(643,430,'ground2').setScale(0.4)
    // SecondLine
     this.add.image(311,294,'ground1').setScale(0.4)
     this.add.image(346,311,'ground1').setScale(0.4)
     this.add.image(379,328,'ground1').setScale(0.4)
     this.add.image(412,345,'ground1').setScale(0.4)
     this.add.image(445,362,'ground1').setScale(0.4)

     this.add.image(511-33,362+17,'ground2').setScale(0.4)
     this.add.image(544-33,379+17,'ground1').setScale(0.4)
     this.add.image(577-33,396+17,'ground1').setScale(0.4)
     this.add.image(610-33,413+17,'ground1').setScale(0.4)
     this.add.image(643-33,430+17,'ground1').setScale(0.4)
    // 3rdLine
     this.add.image(311-33,294+17,'ground1').setScale(0.4)
     this.add.image(346-33,311+17,'ground1').setScale(0.4)
     this.add.image(379-33,328+17,'ground1').setScale(0.4)
     this.add.image(412-33,345+17,'ground1').setScale(0.4)
     this.add.image(445-33,362+17,'ground1').setScale(0.4)

     this.add.image(511-66,362+34,'ground2').setScale(0.4)
     this.add.image(544-66,379+34,'ground1').setScale(0.4)
     this.plantedBrownGround.push(this.add.image(577-66,396+34,'brownGround').setScale(0.4).setInteractive())
     this.plantedBrownGround.push(this.add.image(610-66,413+34,'brownGround').setScale(0.4).setInteractive())
     this.add.image(643-66,430+34,'ground1').setScale(0.4)
    // 4thLine
     this.add.image(311-66,294+34,'ground1').setScale(0.4)
     this.tree2 = this.add.image(311-58,294+51,'tree2').setScale(0.4)
     this.tree2.setOrigin(0.5,1)
     this.add.image(346-66,311+34,'ground1').setScale(0.4)
     this.add.image(379-66,328+34,'ground1').setScale(0.4)
     this.add.image(412-66,345+34,'ground1').setScale(0.4)
     this.add.image(445-66,362+34,'ground1').setScale(0.4)

     this.add.image(511-99,362+51,'ground2').setScale(0.4)
     this.add.image(544-99,379+51,'ground1').setScale(0.4)
     this.plantedBrownGround.push(this.add.image(577-99,396+51,'brownGround').setScale(0.4).setInteractive())
     this.plantedBrownGround.push(this.add.image(610-99,413+51,'brownGround').setScale(0.4).setInteractive())
     this.add.image(643-99,430+51,'ground1').setScale(0.4)
    // 5thLine
     this.add.image(311-99,294+51,'ground1').setScale(0.4)
     this.add.image(346-99,311+51,'ground1').setScale(0.4)
     this.add.image(379-99,328+51,'ground1').setScale(0.4)
     this.add.image(412-99,345+51,'ground1').setScale(0.4)
     this.add.image(445-99,362+51,'ground1').setScale(0.4)

     this.add.image(511-132,362+68,'ground2').setScale(0.4)
     this.add.image(544-132,379+68,'ground1').setScale(0.4)
     this.plantedBrownGround.push(this.add.image(577-132,396+68,'brownGround').setScale(0.4).setInteractive())
     this.plantedBrownGround.push(this.add.image(610-132,413+68,'brownGround').setScale(0.4).setInteractive())
     this.add.image(643-132,430+68,'ground1').setScale(0.4)
    // 6thLine
     this.add.image(311-132,294+68,'ground1').setScale(0.4)
     this.add.image(346-132,311+68,'ground1').setScale(0.4)
     this.add.image(379-132,328+68,'ground1').setScale(0.4)
     this.add.image(412-132,345+68,'ground1').setScale(0.4)
     this.add.image(445-132,362+68,'ground1').setScale(0.4)

     this.add.image(511-165,362+85,'ground2').setScale(0.4)
     this.add.image(544-165,379+85,'ground1').setScale(0.4)
     this.add.image(577-165,396+85,'ground1').setScale(0.4)
     this.add.image(610-165,413+85,'ground1').setScale(0.4)
     this.add.image(643-165,430+85,'ground1').setScale(0.4)
    // 7thLine
     this.add.image(311-165,294+85,'ground1').setScale(0.4)
     this.add.image(346-165,311+85,'ground1').setScale(0.4)
     this.add.image(379-165,328+85,'ground1').setScale(0.4)
     this.add.image(412-165,345+85,'ground1').setScale(0.4)
     this.add.image(445-165,362+85,'ground1').setScale(0.4)
     this.fence = this.add.image(445-165,362+115,'fence').setScale(0.4).setOrigin(0.5,1)


    this.house = this.add.image(500,180,'house').setScale(0.4)

        let posX;
        let posY;
        for (let i = 0; i <this.plantedBrownGround.length; i++) {
          this.plantedBrownGround[i].input.dropZone = true
        let seed = this.add.image(250+i*50,600,'seed').setScale(0.05)
        console.log(this.plantedBrownGround[i]);
      seed.setInteractive(); 
      this.input.setDraggable(seed); 
      this.input.on('dragstart', (pointer, gameObject) => {
        posX = gameObject.x;
        posY = gameObject.y;
        console.log(gameObject);
        
      });
      seed.on('dragend', (pointer,dragX,dragY, dropped) => {
        console.log(dropped);
        console.log(pointer);
        
        const distance = Phaser.Math.Distance.Between(seed.x, seed.y, this.plantedBrownGround[i].x, this.plantedBrownGround[i].y);
        if (dropped) {
          seed.destroy();
          this.successSound.play()
          this.plantedBrownGround[i].setTexture('ground1')
          this.add.image(this.plantedBrownGround[i].x-5, this.plantedBrownGround[i].y+15, 'plant').setScale(0.05).setOrigin(0.5,1);
        } else {
          this.failSound.play()
          seed.setPosition(posX, posY);
          this.warningTxt = this.add.text(210, 650, 'Place the seed in the Brown ground!', {
            font: '20px Arial',
            fill: '#5d4e6d',
          });
          this.time.delayedCall(3000, () => {
            this.warningTxt.destroy()
          });
        }
      });
    }

    this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });
    

  }
  update() {
    this.cursor.x = this.input.activePointer.worldX;
    this.cursor.y = this.input.activePointer.worldY;
  }
}
