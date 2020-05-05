export default class LoadScene extends Phaser.Scene{
    constructor(){
        super("LoadScene")
    }

    preload(){
        let loadingBar = this.add.image(100, 100, "loadingBar").setOrigin(0);

        this.load.on("progress", function (value){
            loadingBar.displayWidth = 200 * value;
            console.log(loadingBar.displayWidth)
        })

        this.load.on("fileprogress", function (file){
            console.log("fileprogress: " + file.src)
        })

        this.load.on("complete", function (){
            console.log("complete")
        })

        // CARREGAMENTO DAS IMAGENS
        this.load.image("Fundo", "./assets/imagens/background.png")
        this.load.image("Tiro", "./assets/imagens/tiro.png")

        // CARREGAMENTO DOS SPRITE SHEETS
        this.load.image("Inimigo", "./assets/imagens/inimigo.png")
        this.load.image("Jogador", "./assets/imagens/player.png")
        this.load.image("Explosion", "./assets/imagens/explosion.png")

        // CARREGAMENTO DOS AUDIOS
        this.load.audio("motorSFX", "./assets/audio/engine_sound.mp3")
        this.load.audio("explosaoSFX", "./assets/audio/explosion_sound.mp3")
        this.load.audio("tiroSFX", "./assets/audio/engine_sound.mp3")
        this.load.audio("startUpSFX", "./assets/audio/start-up_sound.mp3")
    }

    create(){
        
    }
}