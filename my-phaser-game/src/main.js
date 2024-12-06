import { Scene } from "phaser";

const config = {
    type: Phaser.AUTO,
    width: 1333,
    height: 750,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scene: [
        Preloader,
        SplashScene,
        MainScene,
    ],

};

export default new Phaser.Game(config);
