const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
  base = new Base(200, 260, 100, 100);
  //criar corpo do jogador
  arqueiro = new Arqueiro(203, 185, 60, 90)
  arco = new Arco(220, 185, 200, 50)


}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  arqueiro.exibir()
  arco.exibir()
  //exibir a imagem da base do jogador usando a função image()
  base.exibir()

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
