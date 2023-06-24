var sofia
var cardboard1,cardboard2,cardboard3,cardboard4

function preload(){

}

function setup(){
createCanvas(400,400);
//crea el personaje del juego
sofia=createSprite(20,25,18,18)
sofia.shapeColor="pink";
sofia.velocityX=0;
sofia.velocityY=0;
if(sofia.bounce(target))
{
    textSize(40);
    Fill("red");
    text("ESCAPASTE!",130,200)
}
if(keydown(UP_ARROW)){
 sofia.velocityX=0;
 sofia.velocityY=-4;
}
if(keydown(DOWN_ARROW)){
    sofia.velocityX=0;
    sofia.velocityY=4;
   }
   if(keydown(LEFT_ARROW)){
    sofia.velocityX=-4;
    sofia.velocityY=0;
   }
   if(keydown(RIGHT_ARROW)){
    sofia.velocityX=4;
    sofia.velocityY=0;
   }
   sofia.bounceOff(cardboard1)
   sofia.bounceOff(cardboard2)
   sofia.bounceOff(cardboard3)
   sofia.bounceOff(cardboard4)
   sofia.collide(traged);

   textSize(19);
   text("escape",350,340);
   textSize(19);
   text("sofia",30,43)
   
   drawSprites()
//crea el laberinto


}

function draw() {
background("gray");

}
