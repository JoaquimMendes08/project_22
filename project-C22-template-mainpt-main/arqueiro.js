class Arqueiro {
    constructor(x,y,w,h){
        var parado = {isStatic: true};
        this.body = Bodies.rectangle(x,y,w,h, parado);
        this.largura = w;
        this.altura = h;
        this.image = loadImage("./assets/player.png");
        World.add(world, this.body);
    }
    exibir(){
        var pos = this.body.position
        image (this.image, pos.x, pos.y, this.largura, this.altura);
    }
}