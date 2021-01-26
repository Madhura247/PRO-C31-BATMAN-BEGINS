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
    drop = new Drops(120, 450, 1);
   
    
}

function draw(){
 
    background(0);
    drop.display();
}   
