class Sprite {
    constructor(config){
        //set up the image
        this.image = new Image()
        this.image.src = config.src
        this.image.onload = ()=>{
            this.isLoaded = true
        }

        //configure Animation and Initial Scale
        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ]
        }

        //animação
        //animação atual
        this.currentAnimation = config.currentAnimation || "idleDown"
        this.currentAnimationFrame = 0
    }
}