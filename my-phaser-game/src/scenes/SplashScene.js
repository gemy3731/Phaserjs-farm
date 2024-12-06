import { Scene } from "phaser";
export class SplashScene extends Scene {
  constructor() {
    super("SplashScene");
  }
  create() {
    this.bg = this.add.image(0, 0, "background");
    this.bg.setOrigin(0, 0);
    this.bg.setDisplaySize(this.scale.width, this.scale.height);
    this.splashImg = this.add.image(1333 / 2, 750 / 2, "splash").setScale(0.1);
    this.splashImg.setOrigin(0.5, 0.5);
    const loadingText = this.add.text(1333 / 2, 750 / 2 + 150, "Loading...", {
      font: "32px Arial",
      fill: "#5d4e6d",
    });
    loadingText.setOrigin(0.5, 0.5);
    this.time.delayedCall(3000, () => {
      this.scene.start("MainScene");
    });

    this.cursor = this.add.image(0, 0, "cursor").setScale(0.03).setDepth(100);
    this.input.setDefaultCursor("none");
  }
  update() {
    this.cursor.x = this.input.activePointer.worldX;
    this.cursor.y = this.input.activePointer.worldY;
  }
}
