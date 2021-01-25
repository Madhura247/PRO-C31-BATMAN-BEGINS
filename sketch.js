const Bodies = Matter.Bodies;


function preload(){
    
}

function setup(){
    createCanvas(400,700);
    drop = new Drops(120, 450);
   
    
}

function draw(){
 
    background(0);
    drop.display();
}   

