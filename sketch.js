const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

function preload(){
    
}

function setup(){
    createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;
    drop = new Drops(120, 450);
   
    
}

function draw(){
 
    background(0);
    
    var maxDrops=100;
      for(var i=0; i<maxDrops; i++) {
          this.push(new Drops(random(0, 400), random(0, 400)));
      }
}   

