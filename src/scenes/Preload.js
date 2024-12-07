import { Scene } from "phaser";
export class Preloader extends Scene{
    constructor (){
        super('Preloader');
    }
    preload (){
        this.load.image('background', '/assets/GameElements/Background.png');
        this.load.image('splash', '/assets/GameElements/SplashImage.png');
        this.load.image('cursor', '/assets/GameElements/Cursor.png');
        this.load.image('startName', '/assets/GameElements/StartName.png');
        this.load.image('startText', '/assets/GameElements/StartText.png');
        this.load.image('startText', '/assets/GameElements/StartText.png');
        this.load.image('seed', '/assets/GameElements/Seed.png');
        this.load.image('brownGround', '/assets/GameElements/Ground4.png');
        this.load.image('ground1', '/assets/GameElements/Ground%201.png');
        this.load.image('ground2', '/assets/GameElements/Ground2.png');
        this.load.image('fence', '/assets/GameElements/Fence.png');
        this.load.image('house', '/assets/GameElements/House.png');
        this.load.image('tree1', '/assets/GameElements/Tree1.png');
        this.load.image('tree2', '/assets/GameElements/Tree2.png');
        this.load.image('plant', '/assets/GameElements/Plant1.png');
        this.load.audio('inGameSound', '/assets/GameElements/InGameSound.mp3')
        this.load.audio('successSound', '/assets/GameElements/Success.mp3')
        this.load.audio('failSound', '/assets/GameElements/Fail.mp3')
    }
    create (){
        this.scene.start('SplashScene');
        this.bgSound = this.sound.add("inGameSound");
        this.bgSound.play({ loop: true });
    }
}