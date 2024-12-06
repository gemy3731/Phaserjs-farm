import { Scene } from "phaser";
import { Preloader } from "./scenes/Preload";
import { SplashScene } from "./scenes/SplashScene";
import { MainScene } from "./scenes/MainScene";

const config = {
    type: Phaser.AUTO,
    width: 1333,
    height: 750,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scene: [
        Preloaderr,
        SplashScene,
        MainScene,
    ],

};

export default new Phaser.Game(config);
