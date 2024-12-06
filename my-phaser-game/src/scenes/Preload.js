import { Scene } from "phaser";
export class Preloader extends Scene{
    constructor (){
        super('Preloader');
    }
    preload (){
        this.load.image('background', '../../public/assets/GameElements/Background.png');
        this.load.image('splash', '../../public/assets/GameElements/SplashImage.png');
        this.load.image('cursor', '../../public/assets/GameElements/Cursor.png');
        this.load.image('startName', '../../public/assets/GameElements/StartName.png');
        this.load.image('startText', '../../public/assets/GameElements/StartText.png');
        this.load.image('startText', '../../public/assets/GameElements/StartText.png');
        this.load.image('seed', '../../public/assets/GameElements/Seed.png');
        this.load.image('brownGround', '../../public/assets/GameElements/Ground4.png');
        this.load.image('ground1', '../../public/assets/GameElements/Ground%201.png');
        this.load.image('ground2', '../../public/assets/GameElements/Ground2.png');
        this.load.image('fence', '../../public/assets/GameElements/Fence.png');
        this.load.image('house', '../../public/assets/GameElements/House.png');
        this.load.image('tree1', '../../public/assets/GameElements/Tree1.png');
        this.load.image('tree2', '../../public/assets/GameElements/Tree2.png');
        this.load.image('plant', '../../public/assets/GameElements/Plant1.png');
        this.load.audio('inGameSound', '../../public/assets/GameElements/InGameSound.mp3')
        this.load.audio('successSound', '../../public/assets/GameElements/Success.mp3')
        this.load.audio('failSound', '../../public/assets/GameElements/Fail.mp3')
    }
    create (){
        this.scene.start('SplashScene');
    }
}